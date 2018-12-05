/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import {TxData, TxDataPayable} from '../common';
import {promisify} from '@0xproject/utils';
import {classUtils} from '../common';
import {BigNumber} from 'bignumber.js';
import * as fs from "fs-extra";
import * as Web3 from 'web3';

import {BaseContract} from '../base_contract';

export class CDOContract extends BaseContract {
    public trackOutstandingDebts = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.trackOutstandingDebts.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public getTokenID = {
        async callAsync(
            trancheLevel: BigNumber,
            index: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as CDOContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getTokenID.call,
                self.web3ContractInstance,
            )(
                trancheLevel,
                index,
            );
            return result;
        },
    };
    public principalAmount = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.principalAmount.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public withdraw = {
        async sendTransactionAsync(
            _tokenID: string,
            _to: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.withdraw.estimateGasAsync.bind(
                    self,
                    _tokenID,
                    _to,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.withdraw, self.web3ContractInstance,
            )(
                _tokenID,
                _to,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _tokenID: string,
            _to: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.withdraw.estimateGas, self.web3ContractInstance,
            )(
                _tokenID,
                _to,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            _tokenID: string,
            _to: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.withdraw.getData, self.web3ContractInstance,
            )(
                _tokenID,
                _to,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public getTotalIssuances = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.getTotalIssuances.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public isActive = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as CDOContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.isActive.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public setTrancheTokenContract = {
        async sendTransactionAsync(
            trancheTokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.setTrancheTokenContract.estimateGasAsync.bind(
                    self,
                    trancheTokenAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.setTrancheTokenContract, self.web3ContractInstance,
            )(
                trancheTokenAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            trancheTokenAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.setTrancheTokenContract.estimateGas, self.web3ContractInstance,
            )(
                trancheTokenAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            trancheTokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.setTrancheTokenContract.getData, self.web3ContractInstance,
            )(
                trancheTokenAddress,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public trancheToken = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as CDOContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.trancheToken.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public debtInstruments = {
        async callAsync(
            index_0: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as CDOContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.debtInstruments.call,
                self.web3ContractInstance,
            )(
                index_0,
            );
            return result;
        },
    };
    public numberOfTranches = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.numberOfTranches.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public getTrancheOutstanding = {
        async callAsync(
            trancheLevel: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.getTrancheOutstanding.call,
                self.web3ContractInstance,
            )(
                trancheLevel,
            );
            return result;
        },
    };
    public getTokenBalance = {
        async callAsync(
            tokenID: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.getTokenBalance.call,
                self.web3ContractInstance,
            )(
                tokenID,
            );
            return result;
        },
    };
    public owner = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as CDOContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public lastBalance = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.lastBalance.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public repaymentObligation = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.repaymentObligation.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public pricePerShare = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.pricePerShare.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public contractRegistry = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as CDOContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.contractRegistry.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public claimShares = {
        async sendTransactionAsync(
            orderValue: BigNumber,
            trancheLevel: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.claimShares.estimateGasAsync.bind(
                    self,
                    orderValue,
                    trancheLevel,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.claimShares, self.web3ContractInstance,
            )(
                orderValue,
                trancheLevel,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            orderValue: BigNumber,
            trancheLevel: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.claimShares.estimateGas, self.web3ContractInstance,
            )(
                orderValue,
                trancheLevel,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            orderValue: BigNumber,
            trancheLevel: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.claimShares.getData, self.web3ContractInstance,
            )(
                orderValue,
                trancheLevel,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public purchaseShares = {
        async sendTransactionAsync(
            trancheLevel: BigNumber,
            txData: TxDataPayable = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.purchaseShares.estimateGasAsync.bind(
                    self,
                    trancheLevel,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.purchaseShares, self.web3ContractInstance,
            )(
                trancheLevel,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            trancheLevel: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.purchaseShares.estimateGas, self.web3ContractInstance,
            )(
                trancheLevel,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            trancheLevel: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.purchaseShares.getData, self.web3ContractInstance,
            )(
                trancheLevel,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public EXTERNAL_QUERY_GAS_LIMIT = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.EXTERNAL_QUERY_GAS_LIMIT.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public onERC721Received = {
        async sendTransactionAsync(
            _from: string,
            _tokenID: BigNumber,
            index_2: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.onERC721Received.estimateGasAsync.bind(
                    self,
                    _from,
                    _tokenID,
                    index_2,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.onERC721Received, self.web3ContractInstance,
            )(
                _from,
                _tokenID,
                index_2,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            _from: string,
            _tokenID: BigNumber,
            index_2: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.onERC721Received.estimateGas, self.web3ContractInstance,
            )(
                _from,
                _tokenID,
                index_2,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            _from: string,
            _tokenID: BigNumber,
            index_2: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.onERC721Received.getData, self.web3ContractInstance,
            )(
                _from,
                _tokenID,
                index_2,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transferOwnership.estimateGasAsync.bind(
                    self,
                    newOwner,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transferOwnership, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            newOwner: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as CDOContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.transferOwnership.getData, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public debtsRepaymentObligation = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as CDOContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.debtsRepaymentObligation.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    async deploy(...args: any[]): Promise<any> {
        const wrapper = this;
        const rejected = false;

        return new Promise((resolve, reject) => {
            wrapper.web3ContractInstance.new(wrapper.defaults, (err: string, contract: Web3.ContractInstance) => {
                if (err) {
                    reject(err);
                } else if (contract.address) {
                    wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(contract.address);
                    wrapper.address = contract.address;
                    resolve();
                }
            })
        });
    }
    static async deployed(web3: Web3, defaults: Partial<TxData>): Promise<CDOContract> {
        const currentNetwork = web3.version.network;
        const { abi, networks } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);

        return new CDOContract(web3ContractInstance, defaults);
    }
    static async at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<CDOContract> {
        const { abi } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(address);

        return new CDOContract(web3ContractInstance, defaults);
    }
    private static async getArtifactsData(web3: Web3):
        Promise<any>
    {
        try {
            const artifact = await fs.readFile("build/contracts/CDO.json", "utf8");
            const { abi, networks } = JSON.parse(artifact);
            return { abi, networks };
        } catch (e) {
            console.error("Artifacts malformed or nonexistent: " + e.toString());
        }
    }
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
