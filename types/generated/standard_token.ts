/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import { TxData, TxDataPayable } from "../common";
import { promisify } from "@0xproject/utils";
import { classUtils } from "../common";
import { BigNumber } from "bignumber.js";
import * as fs from "fs-extra";
import * as Web3 from "web3";

import { BaseContract } from "../base_contract";

export class StandardTokenContract extends BaseContract {
  public approve = {
    async sendTransactionAsync(
      _spender: string,
      _value: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.approve.estimateGasAsync.bind(self, _spender, _value)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.approve,
        self.web3ContractInstance
      )(_spender, _value, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _spender: string,
      _value: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.approve.estimateGas,
        self.web3ContractInstance
      )(_spender, _value, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _spender: string,
      _value: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as StandardTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
      return abiEncodedTransactionData;
    }
  };
  public totalSupply = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as StandardTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.totalSupply.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public transferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _value: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferFrom.estimateGasAsync.bind(self, _from, _to, _value)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transferFrom,
        self.web3ContractInstance
      )(_from, _to, _value, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _value: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _value, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _value: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as StandardTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public decreaseApproval = {
    async sendTransactionAsync(
      _spender: string,
      _subtractedValue: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.decreaseApproval.estimateGasAsync.bind(
          self,
          _spender,
          _subtractedValue
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.decreaseApproval,
        self.web3ContractInstance
      )(_spender, _subtractedValue, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _spender: string,
      _subtractedValue: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.decreaseApproval.estimateGas,
        self.web3ContractInstance
      )(_spender, _subtractedValue, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _spender: string,
      _subtractedValue: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as StandardTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.decreaseApproval.getData();
      return abiEncodedTransactionData;
    }
  };
  public balanceOf = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as StandardTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.balanceOf.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public transfer = {
    async sendTransactionAsync(
      _to: string,
      _value: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transfer.estimateGasAsync.bind(self, _to, _value)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transfer,
        self.web3ContractInstance
      )(_to, _value, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _value: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transfer.estimateGas,
        self.web3ContractInstance
      )(_to, _value, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _value: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as StandardTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
      return abiEncodedTransactionData;
    }
  };
  public increaseApproval = {
    async sendTransactionAsync(
      _spender: string,
      _addedValue: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.increaseApproval.estimateGasAsync.bind(self, _spender, _addedValue)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.increaseApproval,
        self.web3ContractInstance
      )(_spender, _addedValue, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _spender: string,
      _addedValue: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as StandardTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.increaseApproval.estimateGas,
        self.web3ContractInstance
      )(_spender, _addedValue, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _spender: string,
      _addedValue: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as StandardTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.increaseApproval.getData();
      return abiEncodedTransactionData;
    }
  };
  public allowance = {
    async callAsync(
      _owner: string,
      _spender: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as StandardTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.allowance.call,
        self.web3ContractInstance
      )(_owner, _spender);
      return result;
    }
  };
  async deploy(...args: any[]): Promise<any> {
    const wrapper = this;
    const rejected = false;

    return new Promise((resolve, reject) => {
      wrapper.web3ContractInstance.new(
        wrapper.defaults,
        (err: string, contract: Web3.ContractInstance) => {
          if (err) {
            reject(err);
          } else if (contract.address) {
            wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(
              contract.address
            );
            wrapper.address = contract.address;
            resolve();
          }
        }
      );
    });
  }
  static async deployed(
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<StandardTokenContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new StandardTokenContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<StandardTokenContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new StandardTokenContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/StandardToken.json",
        "utf8"
      );
      const { abi, networks } = JSON.parse(artifact);
      return { abi, networks };
    } catch (e) {
      console.error("Artifacts malformed or nonexistent: " + e.toString());
    }
  }
  constructor(
    web3ContractInstance: Web3.ContractInstance,
    defaults: Partial<TxData>
  ) {
    super(web3ContractInstance, defaults);
    classUtils.bindAll(this, ["web3ContractInstance", "defaults"]);
  }
} // tslint:disable:max-file-line-count
