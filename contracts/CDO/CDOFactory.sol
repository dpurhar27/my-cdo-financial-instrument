pragma solidity ^0.4.18;

import "./CDO.sol";
// import "@optionality.io/clone-factory/contracts/CloneFactory.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/**
* Optionality package auses compiler errors (written in solidity 0.4.23)
* when someone installs it from YARN or NPM and this contract isn't integrated
* yet so I'm commenting it out. You can easily fix this by manually changing the
* compiler version in their contract after installation.
*
* One of the next progression's of the CDO is ability to create cheap
* and upgradeable versions with a pattern of CloneFactory -> CDO Storage ->
* Proxy -> Master Logic Contract. There is one CloneFactory, Proxy and
* Master Logic Contract and many Storages (for each new unique CDO).
*
* Author: Devan Purhar
*/

/*
contract CDOFactory is Ownable, CloneFactory {

  address public libraryAddress;

  event CDOCreated(address newCDOAddress);

  function CDOFactory(address _libraryAddress) public {
    libraryAddress = _libraryAddress;
  }

  function setLibraryAddress(address _libraryAddress) public onlyOwner {
    libraryAddress = _libraryAddress;
  }

  function createCDO(string _name, uint _value) public onlyOwner {
    address clone = createClone(libraryAddress);
    // The below method init() needs to be created still in CDO.sol
    // CDO(clone).init(_name, _value);
    CDOCreated(clone);
  }
}
*/
