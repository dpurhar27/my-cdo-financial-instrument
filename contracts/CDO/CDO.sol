pragma solidity ^ 0.4.18;

// Internal dependencies
import "./TrancheToken.sol";
import "../ContractRegistry.sol";
import "../TermsContract.sol";
import "../libraries/CDOLib.sol";

// External dependencies
import "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

/**
 * CDO is a generic, unopinionated implementation of a Collateralized
 * Debt Obligation credit derivative built on the Dharma Protocol.
 * It contains the core business logic for creating and
 * executing a trustless CDO. This includes any number of
 * tranche classes, shares per class, and different
 * interest rates and risk scores per tranche.
 *
 * All for loops are NOT in danger of exceeding the block gas
 * limit because they only run simple ops. for the number of tranches
 * which in a real CDO won't be excessively large (millions).
 *
 * NOTE: Read the README.md for a full description.
 *
 * Author: Devan Purhar
 * Version: 0.0.3
 */

contract CDO is Ownable, ERC721Receiver {
    using SafeMath for * ;
    using CDOLib for * ;

    /* Set an upper bound on the gas limit allotted for view functions of non-trusted contracts. */
    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 8000;

    /* External contracts */
    ContractRegistry public contractRegistry;
    ERC20 internal principalToken;
    TrancheToken public trancheToken;

    bool public isActive;
    bytes32[] public debtInstruments;
    /* Track how much each token has withdrawn */
    mapping(bytes32 => uint) internal tokenBalances;
    mapping(uint => CDOLib.Tranche) internal tranches;
    /* This CDO's repayment obligation to share-holders */
    uint public repaymentObligation;
    /* Sum of underlying debts repayment obligation */
    uint public debtsRepaymentObligation;
    uint public trackOutstandingDebts;
    uint public lastBalance;
    uint public pricePerShare;
    uint public numberOfTranches;
    uint public principalAmount;


    /************** EVENTS ***************/

    /* NOTE: Unique CDO's are referenced by their address off-chain */

		event LogCDOCreated(
				address indexed cdoAddress,
				uint indexed pricePerShare,
        // Keccak-256 hash is stored when emitting arrays. Relayers will need to
        // listen for Keccak-256 hashes of the desired interest rates.
				uint[] indexed trancheInterestRates,
				uint[] trancheIssuances
		);

		event LogSharesPurchased(
				address indexed cdoAddress,
				uint minted,
				uint trancheLevel
		);

		event LogDebtReceived(
				address indexed cdoAddress,
				bytes32 debtToken
		);

		event LogCDOActivated(address indexed cdoAddress);

    /**
     * Constructor that sets addresses of required external contracts
     * and the values that make up the unique CDO such as creating
     * the different tranches and calculating the repayment.
     *
     * NOTE: Structs can't be passed in using web3.js v0.0.2 so we
     * flatten them into different parameters for now. (it's supported
     * in web3.js v1.0.0 beta)
     */
    function CDO(
        address contractRegistryContract,
        address principalTokenAddress,
        address trancheTokenAddress,
        uint[] trancheInterestRates,
        uint[] trancheIssuances,
        uint _principalAmount,
        uint numberOfDebts,
        uint totalIssuances
    )
        public
    {
        contractRegistry = ContractRegistry(contractRegistryContract);
        principalToken = ERC20(principalTokenAddress);
        trancheToken = TrancheToken(trancheTokenAddress);

        // The CDO isn't eligible until the underlying debt tokens are owned by this contract
        trackOutstandingDebts = numberOfDebts;
        principalAmount = _principalAmount;
        numberOfTranches = trancheInterestRates.length;

        for (uint trancheLevel = 0; trancheLevel < numberOfTranches; trancheLevel++) {

            CDOLib.Tranche memory tranche = CDOLib.Tranche(
                new bytes32[](0),
                0,
                trancheIssuances[trancheLevel],
                trancheInterestRates[trancheLevel],
                0,
                trancheLevel
            );

            tranches[trancheLevel] = tranche;

            repaymentObligation = repaymentObligation.add(
                calculateRepaymentObligation(
                    trancheInterestRates[trancheLevel],
                    trancheIssuances[trancheLevel],
                    totalIssuances
                )
            );
        }

        pricePerShare = principalAmount.div(totalIssuances);

				LogCDOCreated(address(this), pricePerShare, trancheInterestRates, trancheIssuances);

    }


    /************** MODIFIERS ***************/

    /**
    * Requires the CDO to be verified and publicly available. Used to lock
    * investors from purchasing shares when the CDO isn't verified (all
    * underlying debt instruments aren't accounted for).
    */
    modifier requireActive() {
        require(isActive);
        _;
    }

    /**
     * Allows investors to purchase shares of a tranche.
     */
    function purchaseShares(uint trancheLevel)
        public
        requireActive
        payable
    {
        uint mintAmount = verifyOrderAmount(msg.value, trancheLevel);
        CDOLib.purchaseShares(trancheLevel, mintAmount, tranches[trancheLevel], trancheToken);
        owner.transfer(msg.value);
    }

    /**
     * Allows owner of the CDO to claim unbought shares as a fallback
     * if not all are sold. Owning the tokens enables reclaiming the
     * payments allocated to them.
     */
		function claimShares(
       uint orderValue,
       uint trancheLevel
    )
			 public
			 requireActive
       onlyOwner
    {
      uint mintAmount = verifyOrderAmount(orderValue, trancheLevel);
      CDOLib.purchaseShares(trancheLevel, mintAmount, tranches[trancheLevel], trancheToken);
    }

    /**
    * Verifies how many shares the investor wants to purchase and checks if
    * enough shares are left of the specified tranche and returns amount to
    * be minted and bought.
    */
    function verifyOrderAmount(
        uint orderSize,
        uint trancheLevel
    )
        internal
        returns(uint minting)
    {
        if (msg.sender == owner) {
            minting = orderSize;
        } else {
            minting = (msg.value).div(pricePerShare);
        }

        uint sharesLeft = tranches[trancheLevel].numberOfIssuances.sub(tranches[trancheLevel].issuances.length);

        require(sharesLeft >= minting && sharesLeft.sub(minting) >= 0);

        return minting;
    }

    /**
     * Receive ERC721 tokens. Main use cases are for becoming the owner
     * of the Dharma Debt Tokens that make up the CDO or the collateral
     * in case of ERC721 backed credit defaults.
     */
    function onERC721Received(
        address _from,
        uint256 _tokenID,
        bytes
    )
        public
        returns(bytes4)
    {
        // If entry doesn't exist it's not a debt and is considered collateral
        if(contractRegistry.debtRegistry().doesEntryExist(bytes32(_tokenID))) {
            registerDebtInstrument(bytes32(_tokenID));
        }

        return ERC721Receiver.ERC721_RECEIVED;
    }

    /**
    * Register a debt that belongs to this CDO. If all the debts have
    * have been received, activate the CDO to the public.
    */
    function registerDebtInstrument(bytes32 tokenID)
        internal
    {
      debtsRepaymentObligation = debtsRepaymentObligation.add(
              getDebtsRemainingValue(bytes32(tokenID))
          );

      debtInstruments.push(bytes32(tokenID));

      trackOutstandingDebts = trackOutstandingDebts.sub(1);

      if (trackOutstandingDebts == 0) {

          activateCDO();

      }

      LogDebtReceived(address(this), bytes32(tokenID));
    }

    /**
    * Allows the public to access this CDO if the underlying debts
    * total remaining value can pay the promised value of this CDO.
    */
    function activateCDO()
        private
    {
      require(repaymentObligation <= debtsRepaymentObligation);

      isActive = true;
      delete debtsRepaymentObligation;
      delete trackOutstandingDebts;

      LogCDOActivated(address(this));
    }

    /**
    * Allows share-holders to withdraw accumulated repayments. If a
    * repayment has been made since the last time this CDO was accessed
    * then it will update the balances with the new value first.
    */
    function withdraw(
        bytes32 _tokenID,
        address _to
    )
        public
    {
        require(trancheToken.ownerOf(uint(_tokenID)) == msg.sender);
        require(trancheToken.registry().getCDO(_tokenID) == address(this));

        // If the new balance is greater then the last time someone withdrew, a
        // repayment has been made. We update the balances of share-holders.
        if (principalToken.balanceOf.gas(EXTERNAL_QUERY_GAS_LIMIT)(this) > lastBalance) {
            updateBalances();
        }

        uint tokenBalance = getTokenBalance(_tokenID);
        uint CDOBalance = getCDOBalance();

        require(tokenBalance > 0 && tokenBalance <= CDOBalance);

        tokenBalances[_tokenID] = tokenBalances[_tokenID].add(tokenBalance);
        lastBalance = CDOBalance.sub(tokenBalance);
        principalToken.transfer(_to, tokenBalance);

    }

    /**
    * Updates the token balances.
    */
    function updateBalances()
        private
    {
        uint valueToDistribute = getCDOBalance().sub(lastBalance);

        // Loop through tranches in descending priority and waterfall the repayment
        for (uint trancheLevel = 0; trancheLevel < numberOfTranches; trancheLevel++) {

            uint trancheOutstanding = getTrancheOutstanding(trancheLevel);

            if (trancheOutstanding > 0) {

                // Next tranches won't be getting payed this repayment period so break/return
                // after payment of this tranche
                if (valueToDistribute <= trancheOutstanding) {

                    setTrancheEntitlement(valueToDistribute, trancheLevel);
                    break;

                } else {

                    valueToDistribute = valueToDistribute.sub(trancheOutstanding);
                    setTrancheEntitlement(trancheOutstanding, trancheLevel);

                }
            }
        }
    }

    /**
    * Calculates and returns the total repayment value owed to the tranche.
    */
    function calculateRepaymentObligation(
        uint interestRate,
        uint trancheIssuances,
        uint totalIssuances
    )
        internal
        view
        returns(uint outstandingRepayment)
    {
        uint totalTranchePrincipal = principalAmount.mul(trancheIssuances).div(totalIssuances);

        uint generatedInterest = totalTranchePrincipal.mul(interestRate).div(100);

        return totalTranchePrincipal.add(generatedInterest);
    }


  /************** SETTERS ***************/

    /**
    * Sets the total entitlement available to each share-holder of the tranche
    */
    function setTrancheEntitlement(
        uint valueToDistribute,
        uint trancheLevel
    )
        private
    {
        uint entitlement = valueToDistribute.div(tranches[trancheLevel].numberOfIssuances);

        tranches[trancheLevel].balance = tranches[trancheLevel].balance.add(entitlement);
    }

    /**
     * Allows contract owner to set the currently used Tranche Token.
     * Function exists to maximize upgradeability of individual modules
     * in the CDO system.

     * TODO: Implement a system where only trusted people can change this or
     * change is required to be approved.
     */
    function setTrancheTokenContract(address trancheTokenAddress)
        public
        onlyOwner
    {
        trancheToken = TrancheToken(trancheTokenAddress);
    }


  /************** GETTERS ***************/

    /**
    * Returns the current balance of the principal token.
    */
    function getCDOBalance()
        internal
        view
        returns(uint cdoBalance)
    {
      return principalToken.balanceOf.gas(EXTERNAL_QUERY_GAS_LIMIT)(this);
    }

    /**
    * Get the remaining repayment value of a debt.
    */
    function getDebtsRemainingValue(bytes32 _tokenID)
        internal
        returns(uint debtsRemainingValue)
    {

        TermsContract termsContract = TermsContract(contractRegistry.debtRegistry().getTermsContract(bytes32(_tokenID)));

        uint endingTime = termsContract.getTermEndTimestamp(bytes32(_tokenID));

        return termsContract.getExpectedRepaymentValue(bytes32(_tokenID), endingTime);

    }

    /**
    * Calculates and returns the value that still needs to be paid to a tranche.
    */
    function getTrancheOutstanding(uint trancheLevel)
        public
        view
        returns(uint outstandingValue)
    {
        uint trancheTotalRepayment = calculateRepaymentObligation(
                tranches[trancheLevel].interestRate,
                tranches[trancheLevel].numberOfIssuances,
                getTotalIssuances());

        uint alreadyPaid = tranches[trancheLevel].balance.mul(tranches[trancheLevel].numberOfIssuances);

        return trancheTotalRepayment.sub(alreadyPaid);
    }

    /**
    * Calculates and returns the total issuances.
    */
    function getTotalIssuances()
        public
        view
        returns(uint issuances)
    {
        for (uint trancheLevel = 0; trancheLevel < numberOfTranches; trancheLevel++) {
            issuances = issuances.add(tranches[trancheLevel].issuances.length);
        }

        return issuances;
    }

    /**
    * Checks to ensure the token belongs to the specified tranche then
    * returns the tokens current balance by (total repayed - already withdrawn)
    * specific to this tranche and token.
    */
    function getTokenBalance(
        bytes32 tokenID
    )
        public
        view
        returns(uint availableBalance)
    {
        require(trancheToken.registry().checkEntryExists(tokenID));
        uint trancheLevel = trancheToken.registry().getTranche(tokenID);

        return tranches[trancheLevel].balance.sub(tokenBalances[tokenID]);
    }

    /**
     * Returns a tokenID at a specified index
     */
    function getTokenID(
        uint trancheLevel,
        uint index
    )
        public
        view
        returns(bytes32 tokenID)
    {
        return tranches[trancheLevel].issuances[index];
    }

    /**
    * Fallback to receive repayments.
    */
    function() public payable {}

}
