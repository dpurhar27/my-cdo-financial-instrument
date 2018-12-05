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

export class MockERC721ReceiverContract extends BaseContract {
  public getMockReturnValue = {
    async callAsync(
      functionName: string,
      argsSignature: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockERC721ReceiverContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getMockReturnValue.call,
        self.web3ContractInstance
      )(functionName, argsSignature);
      return result;
    }
  };
  public setReturnValueForERC721ReceivedHook = {
    async sendTransactionAsync(
      _returnValue: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setReturnValueForERC721ReceivedHook.estimateGasAsync.bind(
          self,
          _returnValue
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setReturnValueForERC721ReceivedHook,
        self.web3ContractInstance
      )(_returnValue, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _returnValue: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setReturnValueForERC721ReceivedHook
          .estimateGas,
        self.web3ContractInstance
      )(_returnValue, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _returnValue: string,
      txData: TxData = {}
    ): string {
      const self = this as MockERC721ReceiverContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setReturnValueForERC721ReceivedHook.getData();
      return abiEncodedTransactionData;
    }
  };
  public setShouldRevert = {
    async sendTransactionAsync(
      _shouldRevert: boolean,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setShouldRevert.estimateGasAsync.bind(self, _shouldRevert)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setShouldRevert,
        self.web3ContractInstance
      )(_shouldRevert, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _shouldRevert: boolean,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setShouldRevert.estimateGas,
        self.web3ContractInstance
      )(_shouldRevert, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _shouldRevert: boolean,
      txData: TxData = {}
    ): string {
      const self = this as MockERC721ReceiverContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setShouldRevert.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockReturnValue = {
    async sendTransactionAsync(
      functionName: string,
      argsSignature: string,
      returnValue: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC721ReceiverContract;
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
      const self = this as MockERC721ReceiverContract;
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
      const self = this as MockERC721ReceiverContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockReturnValue.getData();
      return abiEncodedTransactionData;
    }
  };
  public wasOnERC721ReceivedCalledWith = {
    async callAsync(
      _address: string,
      _tokenId: BigNumber,
      _data: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockERC721ReceiverContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasOnERC721ReceivedCalledWith.call,
        self.web3ContractInstance
      )(_address, _tokenId, _data);
      return result;
    }
  };
  public reset = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as MockERC721ReceiverContract;
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
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.reset.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as MockERC721ReceiverContract;
      const abiEncodedTransactionData = self.web3ContractInstance.reset.getData();
      return abiEncodedTransactionData;
    }
  };
  public onERC721Received = {
    async sendTransactionAsync(
      _address: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.onERC721Received.estimateGasAsync.bind(
          self,
          _address,
          _tokenId,
          _data
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.onERC721Received,
        self.web3ContractInstance
      )(_address, _tokenId, _data, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _address: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC721ReceiverContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.onERC721Received.estimateGas,
        self.web3ContractInstance
      )(_address, _tokenId, _data, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _address: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): string {
      const self = this as MockERC721ReceiverContract;
      const abiEncodedTransactionData = self.web3ContractInstance.onERC721Received.getData();
      return abiEncodedTransactionData;
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
  ): Promise<MockERC721ReceiverContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new MockERC721ReceiverContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<MockERC721ReceiverContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new MockERC721ReceiverContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/MockERC721Receiver.json",
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
