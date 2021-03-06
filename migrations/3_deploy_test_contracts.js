const CONSTANTS = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
	const CDOLib = artifacts.require("CDOLib");
    const DummyContract = artifacts.require("DummyContract");
    const ERC721Token = artifacts.require("ERC721Token");
    const MockERC721Token = artifacts.require("MockERC721Token");
    const MockDebtRegistry = artifacts.require("MockDebtRegistry");
    const MockERC20Token = artifacts.require("MockERC20Token");
    const MockERC721Receiver = artifacts.require("MockERC721Receiver");
    const MockDebtToken = artifacts.require("MockDebtToken");
    const MockTermsContract = artifacts.require("MockTermsContract");
    const MockCollateralizedTermsContract = artifacts.require("MockCollateralizedTermsContract");
    const MockTokenRegistry = artifacts.require("MockTokenRegistry");
    const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
	const TrancheContract = artifacts.require("TrancheToken");
	const TrancheRegistry = artifacts.require("TrancheRegistry");

    if (network !== CONSTANTS.LIVE_NETWORK_ID) {
		deployer.deploy(CDOLib);
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(ERC721Token);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockERC20Token);
        deployer.deploy(MockERC721Token);
        deployer.deploy(MockERC721Receiver);
        deployer.deploy(MockDebtToken);
        deployer.deploy(MockTermsContract);
        deployer.deploy(MockCollateralizedTermsContract);
        deployer.deploy(MockTokenTransferProxyContract);
		deployer.deploy(TrancheRegistry).then(async () => {
			   await deployer.deploy(TrancheContract, TrancheRegistry.address);
		});
        deployer.deploy(MockTokenRegistry);
    }
};
