pragma solidity ^ 0.4.18;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";

/**
 * TrancheRegistry maps TrancheToken's ID's to their information.
 *
 * TODO: GAS OPTIMIZATION
 * Gas optimize through ordering of variable declarations.
 * Code has been left in a readable / organized manner.
 *
 * METADATA
 * Non-core functionality still needs to be implemented.
 *
 * Author: Devan Purhar
 */

contract TrancheRegistry {

    // mapping from tokenID's to details of the token
    mapping(bytes32 => TokenDetails) internal registry;

    struct TokenDetails {
        address beneficiary;
        address cdo;
        uint priority;
        uint salt;
    }

    /**
    * Inserts a new entry into the registry.
    */
    function insert(
        address _beneficiary,
        address _cdo,
        uint _priority,
        uint _salt
    )
        public
        returns(bytes32 _issuanceHash)
    {
        TokenDetails memory tokenDetails = TokenDetails(
            _beneficiary,
            _cdo,
            _priority,
            _salt
        );

        bytes32 issuanceHash = createIssuanceHash(
            _beneficiary,
            _cdo,
            _priority,
            _salt
            );

        require(registry[issuanceHash].beneficiary == address(0));

        registry[issuanceHash] = tokenDetails;

        return issuanceHash;
    }

    /**
     * Helper function for computing the hash of a given issuance.
     */
    function createIssuanceHash(
        address beneficiary,
        address cdo,
        uint priority,
        uint _salt
    )
        internal
        pure
        returns(bytes32)
    {
        return keccak256(
            beneficiary,
            cdo,
            priority,
            _salt
        );
    }

    /**
    * Returns the beneficiary of the given tokenID.
    */
    function getBeneficiary(bytes32 _tokenID)
        public
        view
        returns(address)
    {
        return registry[_tokenID].beneficiary;
    }

    /**
    * Returns the tranche of the given tokenID.
    */
    function getTranche(bytes32 _tokenID)
        public
        view
        returns(uint)
    {
        return registry[_tokenID].priority;
    }

    /**
    * Returns the CDO instance of the given tokenID.
    */
    function getCDO(bytes32 _tokenID)
        public
        view
        returns(address)
    {
        return registry[_tokenID].cdo;
    }

    /**
    * Checks if an entry with the specified token ID exists within the tranche registry.
    */
    function checkEntryExists(bytes32 _tokenID)
        public
        view
        returns (bool exists)
    {
        return registry[_tokenID].beneficiary != address(0);
    }

}
