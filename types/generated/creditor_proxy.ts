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

export class CreditorProxyContract extends BaseContract {
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.unpause.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.unpause,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as CreditorProxyContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public fillDebtOffer = {
    async sendTransactionAsync(
      creditor: string,
      orderAddresses: string[],
      orderValues: BigNumber[],
      orderBytes32: string[],
      signaturesV: Array<number | BigNumber>,
      signaturesR: string[],
      signaturesS: string[],
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.fillDebtOffer.estimateGasAsync.bind(
          self,
          creditor,
          orderAddresses,
          orderValues,
          orderBytes32,
          signaturesV,
          signaturesR,
          signaturesS
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.fillDebtOffer,
        self.web3ContractInstance
      )(
        creditor,
        orderAddresses,
        orderValues,
        orderBytes32,
        signaturesV,
        signaturesR,
        signaturesS,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      creditor: string,
      orderAddresses: string[],
      orderValues: BigNumber[],
      orderBytes32: string[],
      signaturesV: Array<number | BigNumber>,
      signaturesR: string[],
      signaturesS: string[],
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.fillDebtOffer.estimateGas,
        self.web3ContractInstance
      )(
        creditor,
        orderAddresses,
        orderValues,
        orderBytes32,
        signaturesV,
        signaturesR,
        signaturesS,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      creditor: string,
      orderAddresses: string[],
      orderValues: BigNumber[],
      orderBytes32: string[],
      signaturesV: Array<number | BigNumber>,
      signaturesR: string[],
      signaturesS: string[],
      txData: TxData = {}
    ): string {
      const self = this as CreditorProxyContract;
      const abiEncodedTransactionData = self.web3ContractInstance.fillDebtOffer.getData();
      return abiEncodedTransactionData;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as CreditorProxyContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.paused.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.pause.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.pause,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as CreditorProxyContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public owner = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CreditorProxyContract;
      const result = await promisify<string>(
        self.web3ContractInstance.owner.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public cancelDebtOffer = {
    async sendTransactionAsync(
      commitmentAddresses: string[],
      commitmentValues: BigNumber[],
      termsContractParameters: string[],
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.cancelDebtOffer.estimateGasAsync.bind(
          self,
          commitmentAddresses,
          commitmentValues,
          termsContractParameters
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.cancelDebtOffer,
        self.web3ContractInstance
      )(
        commitmentAddresses,
        commitmentValues,
        termsContractParameters,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      commitmentAddresses: string[],
      commitmentValues: BigNumber[],
      termsContractParameters: string[],
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.cancelDebtOffer.estimateGas,
        self.web3ContractInstance
      )(
        commitmentAddresses,
        commitmentValues,
        termsContractParameters,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      commitmentAddresses: string[],
      commitmentValues: BigNumber[],
      termsContractParameters: string[],
      txData: TxData = {}
    ): string {
      const self = this as CreditorProxyContract;
      const abiEncodedTransactionData = self.web3ContractInstance.cancelDebtOffer.getData();
      return abiEncodedTransactionData;
    }
  };
  public debtOfferCancelled = {
    async callAsync(
      index_0: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as CreditorProxyContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.debtOfferCancelled.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public contractRegistry = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CreditorProxyContract;
      const result = await promisify<string>(
        self.web3ContractInstance.contractRegistry.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public debtOfferFilled = {
    async callAsync(
      index_0: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as CreditorProxyContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.debtOfferFilled.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public NULL_ISSUANCE_HASH = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as CreditorProxyContract;
      const result = await promisify<string>(
        self.web3ContractInstance.NULL_ISSUANCE_HASH.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public EXTERNAL_QUERY_GAS_LIMIT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as CreditorProxyContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.EXTERNAL_QUERY_GAS_LIMIT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public transferOwnership = {
    async sendTransactionAsync(
      newOwner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferOwnership.estimateGasAsync.bind(self, newOwner)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transferOwnership,
        self.web3ContractInstance
      )(newOwner, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      newOwner: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as CreditorProxyContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transferOwnership.estimateGas,
        self.web3ContractInstance
      )(newOwner, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      newOwner: string,
      txData: TxData = {}
    ): string {
      const self = this as CreditorProxyContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
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
  ): Promise<CreditorProxyContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new CreditorProxyContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<CreditorProxyContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new CreditorProxyContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/CreditorProxy.json",
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
