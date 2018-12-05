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
class DharmaMultiSigWalletContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.owners = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.owners.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            }
        };
        this.removeOwner = {
            sendTransactionAsync(owner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.removeOwner.estimateGasAsync.bind(self, owner));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.removeOwner, self.web3ContractInstance)(owner, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(owner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.removeOwner.estimateGas, self.web3ContractInstance)(owner, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(owner, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.removeOwner.getData();
                return abiEncodedTransactionData;
            }
        };
        this.transactionConfirmedBlockTimestamp = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.transactionConfirmedBlockTimestamp.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            }
        };
        this.revokeConfirmation = {
            sendTransactionAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeConfirmation.estimateGasAsync.bind(self, transactionId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.revokeConfirmation, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.revokeConfirmation.estimateGas, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(transactionId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeConfirmation.getData();
                return abiEncodedTransactionData;
            }
        };
        this.executePauseTransactionImmediately = {
            sendTransactionAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.executePauseTransactionImmediately.estimateGasAsync.bind(self, transactionId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.executePauseTransactionImmediately, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.executePauseTransactionImmediately
                        .estimateGas, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(transactionId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.executePauseTransactionImmediately.getData();
                return abiEncodedTransactionData;
            }
        };
        this.isOwner = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.isOwner.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            }
        };
        this.confirmations = {
            callAsync(index_0, index_1, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.confirmations.call, self.web3ContractInstance)(index_0, index_1);
                    return result;
                });
            }
        };
        this.getTransactionCount = {
            callAsync(pending, executed, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTransactionCount.call, self.web3ContractInstance)(pending, executed);
                    return result;
                });
            }
        };
        this.addOwner = {
            sendTransactionAsync(owner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.addOwner.estimateGasAsync.bind(self, owner));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.addOwner, self.web3ContractInstance)(owner, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(owner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.addOwner.estimateGas, self.web3ContractInstance)(owner, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(owner, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.addOwner.getData();
                return abiEncodedTransactionData;
            }
        };
        this.timelockInSeconds = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.timelockInSeconds.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.isConfirmed = {
            callAsync(transactionId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.isConfirmed.call, self.web3ContractInstance)(transactionId);
                    return result;
                });
            }
        };
        this.changeTimeLock = {
            sendTransactionAsync(_timelockInSeconds, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.changeTimeLock.estimateGasAsync.bind(self, _timelockInSeconds));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.changeTimeLock, self.web3ContractInstance)(_timelockInSeconds, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_timelockInSeconds, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.changeTimeLock.estimateGas, self.web3ContractInstance)(_timelockInSeconds, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_timelockInSeconds, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.changeTimeLock.getData();
                return abiEncodedTransactionData;
            }
        };
        this.getConfirmationCount = {
            callAsync(transactionId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getConfirmationCount.call, self.web3ContractInstance)(transactionId);
                    return result;
                });
            }
        };
        this.transactions = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.transactions.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            }
        };
        this.getOwners = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getOwners.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.getTransactionIds = {
            callAsync(from, to, pending, executed, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTransactionIds.call, self.web3ContractInstance)(from, to, pending, executed);
                    return result;
                });
            }
        };
        this.getConfirmations = {
            callAsync(transactionId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getConfirmations.call, self.web3ContractInstance)(transactionId);
                    return result;
                });
            }
        };
        this.transactionCount = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.transactionCount.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.changeRequirement = {
            sendTransactionAsync(_required, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.changeRequirement.estimateGasAsync.bind(self, _required));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.changeRequirement, self.web3ContractInstance)(_required, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_required, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.changeRequirement.estimateGas, self.web3ContractInstance)(_required, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_required, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.changeRequirement.getData();
                return abiEncodedTransactionData;
            }
        };
        this.confirmTransaction = {
            sendTransactionAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.confirmTransaction.estimateGasAsync.bind(self, transactionId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.confirmTransaction, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.confirmTransaction.estimateGas, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(transactionId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.confirmTransaction.getData();
                return abiEncodedTransactionData;
            }
        };
        this.submitTransaction = {
            sendTransactionAsync(destination, value, data, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.submitTransaction.estimateGasAsync.bind(self, destination, value, data));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.submitTransaction, self.web3ContractInstance)(destination, value, data, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(destination, value, data, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.submitTransaction.estimateGas, self.web3ContractInstance)(destination, value, data, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(destination, value, data, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.submitTransaction.getData();
                return abiEncodedTransactionData;
            }
        };
        this.MAX_OWNER_COUNT = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.MAX_OWNER_COUNT.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.required = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.required.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.replaceOwner = {
            sendTransactionAsync(owner, newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.replaceOwner.estimateGasAsync.bind(self, owner, newOwner));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.replaceOwner, self.web3ContractInstance)(owner, newOwner, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(owner, newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.replaceOwner.estimateGas, self.web3ContractInstance)(owner, newOwner, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(owner, newOwner, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.replaceOwner.getData();
                return abiEncodedTransactionData;
            }
        };
        this.executeTransaction = {
            sendTransactionAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.executeTransaction.estimateGasAsync.bind(self, transactionId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.executeTransaction, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(transactionId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.executeTransaction.estimateGas, self.web3ContractInstance)(transactionId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(transactionId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.executeTransaction.getData();
                return abiEncodedTransactionData;
            }
        };
        common_1.classUtils.bindAll(this, ["web3ContractInstance", "defaults"]);
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
            const web3ContractInstance = web3.eth
                .contract(abi)
                .at(networks[currentNetwork].address);
            return new DharmaMultiSigWalletContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new DharmaMultiSigWalletContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/DharmaMultiSigWallet.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.DharmaMultiSigWalletContract = DharmaMultiSigWalletContract;
//# sourceMappingURL=dharma_multi_sig_wallet.js.map