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

export class MockZeroExExchangeContract extends BaseContract {
  public getMockReturnValue = {
    async callAsync(
      functionName: string,
      argsSignature: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockZeroExExchangeContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getMockReturnValue.call,
        self.web3ContractInstance
      )(functionName, argsSignature);
      return result;
    }
  };
  public mockReturnValue = {
    async sendTransactionAsync(
      functionName: string,
      argsSignature: string,
      returnValue: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockZeroExExchangeContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockReturnValue.estimateGasAsync.bind(
          self,
          functionName,
          argsSignature,
          returnValue
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockReturnValue,
        self.web3ContractInstance
      )(functionName, argsSignature, returnValue, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      functionName: string,
      argsSignature: string,
      returnValue: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockZeroExExchangeContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockReturnValue.estimateGas,
        self.web3ContractInstance
      )(functionName, argsSignature, returnValue, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      functionName: string,
      argsSignature: string,
      returnValue: string,
      txData: TxData = {}
    ): string {
      const self = this as MockZeroExExchangeContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockReturnValue.getData();
      return abiEncodedTransactionData;
    }
  };
  public fillOrder = {
    async sendTransactionAsync(
      orderAddresses: string[],
      orderValues: BigNumber[],
      fillTakerTokenAmount: BigNumber,
      shouldThrowOnInsufficientBalanceOrAllowance: boolean,
      v: number | BigNumber,
      r: string,
      s: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockZeroExExchangeContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.fillOrder.estimateGasAsync.bind(
          self,
          orderAddresses,
          orderValues,
          fillTakerTokenAmount,
          shouldThrowOnInsufficientBalanceOrAllowance,
          v,
          r,
          s
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.fillOrder,
        self.web3ContractInstance
      )(
        orderAddresses,
        orderValues,
        fillTakerTokenAmount,
        shouldThrowOnInsufficientBalanceOrAllowance,
        v,
        r,
        s,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      orderAddresses: string[],
      orderValues: BigNumber[],
      fillTakerTokenAmount: BigNumber,
      shouldThrowOnInsufficientBalanceOrAllowance: boolean,
      v: number | BigNumber,
      r: string,
      s: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockZeroExExchangeContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.fillOrder.estimateGas,
        self.web3ContractInstance
      )(
        orderAddresses,
        orderValues,
        fillTakerTokenAmount,
        shouldThrowOnInsufficientBalanceOrAllowance,
        v,
        r,
        s,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      orderAddresses: string[],
      orderValues: BigNumber[],
      fillTakerTokenAmount: BigNumber,
      shouldThrowOnInsufficientBalanceOrAllowance: boolean,
      v: number | BigNumber,
      r: string,
      s: string,
      txData: TxData = {}
    ): string {
      const self = this as MockZeroExExchangeContract;
      const abiEncodedTransactionData = self.web3ContractInstance.fillOrder.getData();
      return abiEncodedTransactionData;
    }
  };
  public reset = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as MockZeroExExchangeContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.reset.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.reset,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as MockZeroExExchangeContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.reset.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as MockZeroExExchangeContract;
      const abiEncodedTransactionData = self.web3ContractInstance.reset.getData();
      return abiEncodedTransactionData;
    }
  };
  public wasFillOrderCalledWith = {
    async callAsync(
      orderAddresses: string[],
      orderValues: BigNumber[],
      fillTakerTokenAmount: BigNumber,
      shouldThrowOnInsufficientBalanceOrAllowance: boolean,
      v: number | BigNumber,
      r: string,
      s: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockZeroExExchangeContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasFillOrderCalledWith.call,
        self.web3ContractInstance
      )(
        orderAddresses,
        orderValues,
        fillTakerTokenAmount,
        shouldThrowOnInsufficientBalanceOrAllowance,
        v,
        r,
        s
      );
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
  ): Promise<MockZeroExExchangeContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new MockZeroExExchangeContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<MockZeroExExchangeContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new MockZeroExExchangeContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/MockZeroExExchange.json",
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
