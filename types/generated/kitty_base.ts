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

export class KittyBaseContract extends BaseContract {
  public cfoAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.cfoAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public ceoAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.ceoAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public siringAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.siringAuction.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public setCEO = {
    async sendTransactionAsync(
      _newCEO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setCEO.estimateGasAsync.bind(self, _newCEO)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setCEO,
        self.web3ContractInstance
      )(_newCEO, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _newCEO: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCEO.estimateGas,
        self.web3ContractInstance
      )(_newCEO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCEO: string, txData: TxData = {}): string {
      const self = this as KittyBaseContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCEO.getData();
      return abiEncodedTransactionData;
    }
  };
  public setCOO = {
    async sendTransactionAsync(
      _newCOO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setCOO.estimateGasAsync.bind(self, _newCOO)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setCOO,
        self.web3ContractInstance
      )(_newCOO, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _newCOO: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCOO.estimateGas,
        self.web3ContractInstance
      )(_newCOO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCOO: string, txData: TxData = {}): string {
      const self = this as KittyBaseContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCOO.getData();
      return abiEncodedTransactionData;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyBaseContract;
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
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyBaseContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public sireAllowedToAddress = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.sireAllowedToAddress.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public kittyIndexToApproved = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.kittyIndexToApproved.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public setCFO = {
    async sendTransactionAsync(
      _newCFO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setCFO.estimateGasAsync.bind(self, _newCFO)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setCFO,
        self.web3ContractInstance
      )(_newCFO, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _newCFO: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCFO.estimateGas,
        self.web3ContractInstance
      )(_newCFO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCFO: string, txData: TxData = {}): string {
      const self = this as KittyBaseContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCFO.getData();
      return abiEncodedTransactionData;
    }
  };
  public setSecondsPerBlock = {
    async sendTransactionAsync(
      secs: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setSecondsPerBlock.estimateGasAsync.bind(self, secs)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setSecondsPerBlock,
        self.web3ContractInstance
      )(secs, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      secs: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setSecondsPerBlock.estimateGas,
        self.web3ContractInstance
      )(secs, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(secs: BigNumber, txData: TxData = {}): string {
      const self = this as KittyBaseContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setSecondsPerBlock.getData();
      return abiEncodedTransactionData;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as KittyBaseContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.paused.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public secondsPerBlock = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyBaseContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.secondsPerBlock.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyBaseContract;
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
      const self = this as KittyBaseContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyBaseContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public cooldowns = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as KittyBaseContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.cooldowns.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public kittyIndexToOwner = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.kittyIndexToOwner.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public cooAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.cooAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public saleAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyBaseContract;
      const result = await promisify<string>(
        self.web3ContractInstance.saleAuction.call,
        self.web3ContractInstance
      )();
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
  ): Promise<KittyBaseContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new KittyBaseContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<KittyBaseContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new KittyBaseContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/KittyBase.json",
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
