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
class TokenRegistryContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.getTokenAttributesByIndex = {
            callAsync(_index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenAttributesByIndex.call, self.web3ContractInstance)(_index);
                    return result;
                });
            }
        };
        this.getTokenIndexBySymbol = {
            callAsync(_symbol, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenIndexBySymbol.call, self.web3ContractInstance)(_symbol);
                    return result;
                });
            }
        };
        this.getTokenAddressBySymbol = {
            callAsync(_symbol, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenAddressBySymbol.call, self.web3ContractInstance)(_symbol);
                    return result;
                });
            }
        };
        this.symbolHashToTokenAttributes = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.symbolHashToTokenAttributes.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            }
        };
        this.setTokenAttributes = {
            sendTransactionAsync(_symbol, _tokenAddress, _tokenName, _numDecimals, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setTokenAttributes.estimateGasAsync.bind(self, _symbol, _tokenAddress, _tokenName, _numDecimals));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.setTokenAttributes, self.web3ContractInstance)(_symbol, _tokenAddress, _tokenName, _numDecimals, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_symbol, _tokenAddress, _tokenName, _numDecimals, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.setTokenAttributes.estimateGas, self.web3ContractInstance)(_symbol, _tokenAddress, _tokenName, _numDecimals, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_symbol, _tokenAddress, _tokenName, _numDecimals, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setTokenAttributes.getData();
                return abiEncodedTransactionData;
            }
        };
        this.getTokenAddressByIndex = {
            callAsync(_index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenAddressByIndex.call, self.web3ContractInstance)(_index);
                    return result;
                });
            }
        };
        this.getTokenSymbolByIndex = {
            callAsync(_index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenSymbolByIndex.call, self.web3ContractInstance)(_index);
                    return result;
                });
            }
        };
        this.getTokenAttributesBySymbol = {
            callAsync(_symbol, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenAttributesBySymbol.call, self.web3ContractInstance)(_symbol);
                    return result;
                });
            }
        };
        this.getNumDecimalsFromSymbol = {
            callAsync(_symbol, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getNumDecimalsFromSymbol.call, self.web3ContractInstance)(_symbol);
                    return result;
                });
            }
        };
        this.getNumDecimalsByIndex = {
            callAsync(_index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getNumDecimalsByIndex.call, self.web3ContractInstance)(_index);
                    return result;
                });
            }
        };
        this.owner = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.tokenSymbolList = {
            callAsync(index_0, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenSymbolList.call, self.web3ContractInstance)(index_0);
                    return result;
                });
            }
        };
        this.getTokenNameBySymbol = {
            callAsync(_symbol, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenNameBySymbol.call, self.web3ContractInstance)(_symbol);
                    return result;
                });
            }
        };
        this.tokenSymbolListLength = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenSymbolListLength.call, self.web3ContractInstance)();
                    return result;
                });
            }
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
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
                return abiEncodedTransactionData;
            }
        };
        this.getTokenNameByIndex = {
            callAsync(_index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTokenNameByIndex.call, self.web3ContractInstance)(_index);
                    return result;
                });
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
            return new TokenRegistryContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new TokenRegistryContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/TokenRegistry.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.TokenRegistryContract = TokenRegistryContract;
//# sourceMappingURL=token_registry.js.map