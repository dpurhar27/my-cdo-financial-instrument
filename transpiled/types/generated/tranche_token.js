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
class TrancheTokenContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.name = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.getApproved = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getApproved.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
            }
        };
        this.approve = {
            sendTransactionAsync(_to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, _to, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.approve, self.web3ContractInstance)(_to, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance)(_to, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
                return abiEncodedTransactionData;
            }
        };
        this.totalSupply = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.totalSupply.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.transferFrom = {
            sendTransactionAsync(_from, _to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_from, _to, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from, _to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_from, _to, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from, _to, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
                return abiEncodedTransactionData;
            }
        };
        this.tokenOfOwnerByIndex = {
            callAsync(_owner, _index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenOfOwnerByIndex.call, self.web3ContractInstance)(_owner, _index);
                    return result;
                });
            }
        };
        this.safeTransferFrom = {
            sendTransactionAsync(_from, _to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.safeTransferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.safeTransferFrom, self.web3ContractInstance)(_from, _to, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from, _to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.safeTransferFrom.estimateGas, self.web3ContractInstance)(_from, _to, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from, _to, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.safeTransferFrom.getData();
                return abiEncodedTransactionData;
            }
        };
        this.exists = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.exists.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
            }
        };
        this.tokenByIndex = {
            callAsync(_index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenByIndex.call, self.web3ContractInstance)(_index);
                    return result;
                });
            }
        };
        this.ownerOf = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.ownerOf.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
            }
        };
        this.balanceOf = {
            callAsync(_owner, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.balanceOf.call, self.web3ContractInstance)(_owner);
                    return result;
                });
            }
        };
        this.registry = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.registry.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.symbol = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.symbol.call, self.web3ContractInstance)();
                    return result;
                });
            }
        };
        this.mintTrancheToken = {
            sendTransactionAsync(beneficiary, cdo, trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mintTrancheToken.estimateGasAsync.bind(self, beneficiary, cdo, trancheLevel));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mintTrancheToken, self.web3ContractInstance)(beneficiary, cdo, trancheLevel, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(beneficiary, cdo, trancheLevel, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mintTrancheToken.estimateGas, self.web3ContractInstance)(beneficiary, cdo, trancheLevel, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(beneficiary, cdo, trancheLevel, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mintTrancheToken.getData();
                return abiEncodedTransactionData;
            }
        };
        this.setApprovalForAll = {
            sendTransactionAsync(_to, _approved, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setApprovalForAll.estimateGasAsync.bind(self, _to, _approved));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.setApprovalForAll, self.web3ContractInstance)(_to, _approved, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to, _approved, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.setApprovalForAll.estimateGas, self.web3ContractInstance)(_to, _approved, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to, _approved, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setApprovalForAll.getData();
                return abiEncodedTransactionData;
            }
        };
        this.safeTransferFrom = {
            sendTransactionAsync(_from, _to, _tokenId, _data, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.safeTransferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId, _data));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.safeTransferFrom, self.web3ContractInstance)(_from, _to, _tokenId, _data, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from, _to, _tokenId, _data, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.safeTransferFrom.estimateGas, self.web3ContractInstance)(_from, _to, _tokenId, _data, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from, _to, _tokenId, _data, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.safeTransferFrom.getData();
                return abiEncodedTransactionData;
            }
        };
        this.tokenURI = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenURI.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
            }
        };
        this.isApprovedForAll = {
            callAsync(_owner, _operator, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.isApprovedForAll.call, self.web3ContractInstance)(_owner, _operator);
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
            return new TrancheTokenContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new TrancheTokenContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/TrancheToken.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.TrancheTokenContract = TrancheTokenContract;
//# sourceMappingURL=tranche_token.js.map