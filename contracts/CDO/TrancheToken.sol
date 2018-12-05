pragma solidity ^ 0.4.18;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "./TrancheRegistry.sol";

/**
 * TrancheToken defines what a Tranche Token is and what
 * data it holds and makes it unique.
 *
 * Each Tranche Token represents a single share of a specified
 * tranche. The tranche is indicated by the TrancheLevel. The
 * CDO it belongs to is indicated by the address.
 *
 * Representing shares as unique tokens allows for high liquidity
 * and trading on secondary markets as well as an eventual trustless
 * and transparent system.
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

contract TrancheToken is ERC721Token {

    TrancheRegistry public registry;
    uint internal salt;

    /**
     * Constructor that sets the address of the debt registry and
     * details of the Tranche Token.
     */
    function TrancheToken(address _registry)
    public
    ERC721Token("TrancheToken", "TT")
    {
        registry = TrancheRegistry(_registry);
    }

    /**
    * Mint the unique tranche token and insert it into the registry.
    */
    function mintTrancheToken(
        address beneficiary,
        address cdo,
        uint trancheLevel
    )
        public
        returns(bytes32)
    {
        bytes32 entryHash = registry.insert(
            beneficiary,
            cdo,
            trancheLevel,
            salt
        );

        super._mint(beneficiary, uint(entryHash));
        salt++;

        return entryHash;
    }

    /**
     * Override the core ownership getter of the parent non-fungible token
     * contract so that it retrieves the Tranche Token's current beneficiary
     * from the tranche registry.
     */
    function _ownerOf(uint _tokenID)
        internal
        view
        returns(address _owner)
    {
        return registry.getBeneficiary(bytes32(_tokenID));
    }

}
