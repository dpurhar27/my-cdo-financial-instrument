"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@0xproject/utils");
const common_1 = require("../common");
const fs = require("fs-extra");
const base_contract_1 = require("../base_contract");
class CDOContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.trackOutstandingDebts = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.trackOutstandingDebts.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.getTokenID = {
            callAsync(trancheLevel, index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenID.call, self.web3ContractInstance)(trancheLevel, index);
                    return result;
                });
            },
        };
        this.principalAmount = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.principalAmount.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.withdraw = {
            sendTransactionAsync(_tokenID, _to, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.withdraw.estimateGasAsync.bind(self, _tokenID, _to));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.withdraw, self.web3ContractInstance)(_tokenID, _to, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_tokenID, _to, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.withdraw.estimateGas, self.web3ContractInstance)(_tokenID, _to, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_tokenID, _to, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const abiEncodedTransactionData = yield utils_1.promisify(self.web3ContractInstance.withdraw.getData, self.web3ContractInstance)(_tokenID, _to, txDataWithDefaults);
                    return abiEncodedTransactionData;
                });
            },
        };
        this.getTotalIssuances = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTotalIssuances.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.isActive = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.isActive.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.setTrancheTokenContract = {
            sendTransactionAsync(trancheTokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setTrancheTokenContract.estimateGasAsync.bind(self, trancheTokenAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.setTrancheTokenContract, self.web3ContractInstance)(trancheTokenAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(trancheTokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.setTrancheTokenContract.estimateGas, self.web3ContractInstance)(trancheTokenAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(trancheTokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const abiEncodedTransactionData = yield utils_1.promisify(self.web3ContractInstance.setTrancheTokenContract.getData, self.web3ContractInstance)(trancheTokenAddress, txDataWithDefaults);
                    return abiEncodedTransactionData;
                });
            },
        };
        this.trancheToken = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.trancheToken.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.debtInstruments = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.debtInstruments.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            },
        };
        this.numberOfTranches = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.numberOfTranches.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.getTrancheOutstanding = {
            callAsync(trancheLevel, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTrancheOutstanding.call, self.web3ContractInstance)(trancheLevel);
                    return result;
                });
            },
        };
        this.getTokenBalance = {
            callAsync(tokenID, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenBalance.call, self.web3ContractInstance)(tokenID);
                    return result;
                });
            },
        };
        this.owner = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.lastBalance = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.lastBalance.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.repaymentObligation = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.repaymentObligation.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.pricePerShare = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.pricePerShare.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.contractRegistry = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.contractRegistry.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.claimShares = {
            sendTransactionAsync(orderValue, trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.claimShares.estimateGasAsync.bind(self, orderValue, trancheLevel));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.claimShares, self.web3ContractInstance)(orderValue, trancheLevel, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(orderValue, trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.claimShares.estimateGas, self.web3ContractInstance)(orderValue, trancheLevel, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(orderValue, trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const abiEncodedTransactionData = yield utils_1.promisify(self.web3ContractInstance.claimShares.getData, self.web3ContractInstance)(orderValue, trancheLevel, txDataWithDefaults);
                    return abiEncodedTransactionData;
                });
            },
        };
        this.purchaseShares = {
            sendTransactionAsync(trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.purchaseShares.estimateGasAsync.bind(self, trancheLevel));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.purchaseShares, self.web3ContractInstance)(trancheLevel, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.purchaseShares.estimateGas, self.web3ContractInstance)(trancheLevel, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const abiEncodedTransactionData = yield utils_1.promisify(self.web3ContractInstance.purchaseShares.getData, self.web3ContractInstance)(trancheLevel, txDataWithDefaults);
                    return abiEncodedTransactionData;
                });
            },
        };
        this.EXTERNAL_QUERY_GAS_LIMIT = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.EXTERNAL_QUERY_GAS_LIMIT.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.onERC721Received = {
            sendTransactionAsync(_from, _tokenID, index_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.onERC721Received.estimateGasAsync.bind(self, _from, _tokenID, index_2));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.onERC721Received, self.web3ContractInstance)(_from, _tokenID, index_2, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from, _tokenID, index_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.onERC721Received.estimateGas, self.web3ContractInstance)(_from, _tokenID, index_2, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from, _tokenID, index_2, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const abiEncodedTransactionData = yield utils_1.promisify(self.web3ContractInstance.onERC721Received.getData, self.web3ContractInstance)(_from, _tokenID, index_2, txDataWithDefaults);
                    return abiEncodedTransactionData;
                });
            },
        };
        this.transferOwnership = {
            sendTransactionAsync(newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const abiEncodedTransactionData = yield utils_1.promisify(self.web3ContractInstance.transferOwnership.getData, self.web3ContractInstance)(newOwner, txDataWithDefaults);
                    return abiEncodedTransactionData;
                });
            },
        };
        this.debtsRepaymentObligation = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.debtsRepaymentObligation.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        common_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
    deploy(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const wrapper = this;
            const rejected = false;
            return new Promise((resolve, reject) => {
                wrapper.web3ContractInstance.new(wrapper.defaults, (err, contract) => {
                    if (err) {
                        reject(err);
                    }
                    else if (contract.address) {
                        wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(contract.address);
                        wrapper.address = contract.address;
                        resolve();
                    }
                });
            });
        });
    }
    static deployed(web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentNetwork = web3.version.network;
            const { abi, networks } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);
            return new CDOContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new CDOContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/CDO.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.CDOContract = CDOContract;
//# sourceMappingURL=cdo.js.map