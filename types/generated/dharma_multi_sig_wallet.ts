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

export class DharmaMultiSigWalletContract extends BaseContract {
  public owners = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<string>(
        self.web3ContractInstance.owners.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public removeOwner = {
    async sendTransactionAsync(
      owner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.removeOwner.estimateGasAsync.bind(self, owner)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.removeOwner,
        self.web3ContractInstance
      )(owner, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      owner: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.removeOwner.estimateGas,
        self.web3ContractInstance
      )(owner, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(owner: string, txData: TxData = {}): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.removeOwner.getData();
      return abiEncodedTransactionData;
    }
  };
  public transactionConfirmedBlockTimestamp = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.transactionConfirmedBlockTimestamp.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public revokeConfirmation = {
    async sendTransactionAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeConfirmation.estimateGasAsync.bind(self, transactionId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeConfirmation,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeConfirmation.estimateGas,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      transactionId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeConfirmation.getData();
      return abiEncodedTransactionData;
    }
  };
  public executePauseTransactionImmediately = {
    async sendTransactionAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.executePauseTransactionImmediately.estimateGasAsync.bind(
          self,
          transactionId
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.executePauseTransactionImmediately,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.executePauseTransactionImmediately
          .estimateGas,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      transactionId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.executePauseTransactionImmediately.getData();
      return abiEncodedTransactionData;
    }
  };
  public isOwner = {
    async callAsync(
      index_0: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isOwner.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public confirmations = {
    async callAsync(
      index_0: BigNumber,
      index_1: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.confirmations.call,
        self.web3ContractInstance
      )(index_0, index_1);
      return result;
    }
  };
  public getTransactionCount = {
    async callAsync(
      pending: boolean,
      executed: boolean,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getTransactionCount.call,
        self.web3ContractInstance
      )(pending, executed);
      return result;
    }
  };
  public addOwner = {
    async sendTransactionAsync(
      owner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addOwner.estimateGasAsync.bind(self, owner)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.addOwner,
        self.web3ContractInstance
      )(owner, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      owner: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.addOwner.estimateGas,
        self.web3ContractInstance
      )(owner, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(owner: string, txData: TxData = {}): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.addOwner.getData();
      return abiEncodedTransactionData;
    }
  };
  public timelockInSeconds = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.timelockInSeconds.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public isConfirmed = {
    async callAsync(
      transactionId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isConfirmed.call,
        self.web3ContractInstance
      )(transactionId);
      return result;
    }
  };
  public changeTimeLock = {
    async sendTransactionAsync(
      _timelockInSeconds: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.changeTimeLock.estimateGasAsync.bind(self, _timelockInSeconds)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.changeTimeLock,
        self.web3ContractInstance
      )(_timelockInSeconds, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _timelockInSeconds: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.changeTimeLock.estimateGas,
        self.web3ContractInstance
      )(_timelockInSeconds, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _timelockInSeconds: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.changeTimeLock.getData();
      return abiEncodedTransactionData;
    }
  };
  public getConfirmationCount = {
    async callAsync(
      transactionId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getConfirmationCount.call,
        self.web3ContractInstance
      )(transactionId);
      return result;
    }
  };
  public transactions = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<[string, BigNumber, string, boolean]> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<[string, BigNumber, string, boolean]>(
        self.web3ContractInstance.transactions.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public getOwners = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getOwners.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getTransactionIds = {
    async callAsync(
      from: BigNumber,
      to: BigNumber,
      pending: boolean,
      executed: boolean,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber[]> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber[]>(
        self.web3ContractInstance.getTransactionIds.call,
        self.web3ContractInstance
      )(from, to, pending, executed);
      return result;
    }
  };
  public getConfirmations = {
    async callAsync(
      transactionId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string[]> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getConfirmations.call,
        self.web3ContractInstance
      )(transactionId);
      return result;
    }
  };
  public transactionCount = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.transactionCount.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public changeRequirement = {
    async sendTransactionAsync(
      _required: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.changeRequirement.estimateGasAsync.bind(self, _required)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.changeRequirement,
        self.web3ContractInstance
      )(_required, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _required: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.changeRequirement.estimateGas,
        self.web3ContractInstance
      )(_required, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _required: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.changeRequirement.getData();
      return abiEncodedTransactionData;
    }
  };
  public confirmTransaction = {
    async sendTransactionAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.confirmTransaction.estimateGasAsync.bind(self, transactionId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.confirmTransaction,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.confirmTransaction.estimateGas,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      transactionId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.confirmTransaction.getData();
      return abiEncodedTransactionData;
    }
  };
  public submitTransaction = {
    async sendTransactionAsync(
      destination: string,
      value: BigNumber,
      data: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.submitTransaction.estimateGasAsync.bind(
          self,
          destination,
          value,
          data
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.submitTransaction,
        self.web3ContractInstance
      )(destination, value, data, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      destination: string,
      value: BigNumber,
      data: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.submitTransaction.estimateGas,
        self.web3ContractInstance
      )(destination, value, data, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      destination: string,
      value: BigNumber,
      data: string,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.submitTransaction.getData();
      return abiEncodedTransactionData;
    }
  };
  public MAX_OWNER_COUNT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.MAX_OWNER_COUNT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public required = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as DharmaMultiSigWalletContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.required.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public replaceOwner = {
    async sendTransactionAsync(
      owner: string,
      newOwner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.replaceOwner.estimateGasAsync.bind(self, owner, newOwner)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.replaceOwner,
        self.web3ContractInstance
      )(owner, newOwner, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      owner: string,
      newOwner: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.replaceOwner.estimateGas,
        self.web3ContractInstance
      )(owner, newOwner, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      owner: string,
      newOwner: string,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.replaceOwner.getData();
      return abiEncodedTransactionData;
    }
  };
  public executeTransaction = {
    async sendTransactionAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.executeTransaction.estimateGasAsync.bind(self, transactionId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.executeTransaction,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      transactionId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DharmaMultiSigWalletContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.executeTransaction.estimateGas,
        self.web3ContractInstance
      )(transactionId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      transactionId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DharmaMultiSigWalletContract;
      const abiEncodedTransactionData = self.web3ContractInstance.executeTransaction.getData();
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
  ): Promise<DharmaMultiSigWalletContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new DharmaMultiSigWalletContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<DharmaMultiSigWalletContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new DharmaMultiSigWalletContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/DharmaMultiSigWallet.json",
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
