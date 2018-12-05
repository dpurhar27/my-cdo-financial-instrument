pragma solidity ^0.4.18;

import "../CDO/TrancheToken.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * CDOLib is a library that contains the definition of
 * a Tranche struct and the minting process of TrancheTokens.
 *
 * Because CDO is defined in a generic matter, all methods in
 * the CDO.sol will be defined here in the future (not just minting etc.).
 * CDO.sol will act as a storage contract for each unique CDO
 * created and CDOLib will be the master interface. A proxy will
 * facilitate interaction between Unique CDO.sol's and CDOLib.
 *
 * This design allows for code re-use, cheap (gas) CDO's, and
 * smart contract upgradeability.
 *
 * TODO: Gas optimize through ordering of variable declarations
 * before putting into production. Also need to run gas tests
 * to check if the contract gets run enough in a production
 * environment that it is cheaper to keep local calls only
 * vs. making library calls each time. This will lead to the
 * final design decision of whether to abstract logic into
 * a master library contract or keep it in each CDO.sol.
 * (Comparing Gas Cost at Deployment vs Running of Functions)
 *
 * Code has been left in a readable / organized manner.
 *
 * Author: Devan Purhar
 */

library CDOLib {
   using SafeMath for *;

   event LogSharesPurchased(
       address indexed cdoAddress,
       uint minted,
       uint trancheLevel
   );

  struct Tranche {
    bytes32[] issuances;
    uint balance;
    uint numberOfIssuances;
    uint interestRate;
    uint riskRating;
    uint trancheLevel;
  }

  function purchaseShares(
      uint trancheLevel,
      uint minting,
      Tranche storage tranche,
      TrancheToken trancheToken
  )
      public
  {

    for (uint i = 0; i < minting; i++) {
        tranche.issuances.push(trancheToken.mintTrancheToken(
            msg.sender,
            address(this),
            trancheLevel
          ));
    }

    LogSharesPurchased(address(this), minting, trancheLevel);

  }

}
