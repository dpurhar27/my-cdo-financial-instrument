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

export class TrancheRegistryContract extends BaseContract {
  public getTranche = {
    async callAsync(
      _tokenID: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as TrancheRegistryContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getTranche.call,
        self.web3ContractInstance
      )(_tokenID);
      return result;
    }
  };
  public insert = {
    async sendTransactionAsync(
      _beneficiary: string,
      _cdo: string,
      _priority: BigNumber,
      _salt: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as TrancheRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.insert.estimateGasAsync.bind(
          self,
          _beneficiary,
          _cdo,
          _priority,
          _salt
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.insert,
        self.web3ContractInstance
      )(_beneficiary, _cdo, _priority, _salt, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _beneficiary: string,
      _cdo: string,
      _priority: BigNumber,
      _salt: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as TrancheRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.insert.estimateGas,
        self.web3ContractInstance
      )(_beneficiary, _cdo, _priority, _salt, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _beneficiary: string,
      _cdo: string,
      _priority: BigNumber,
      _salt: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as TrancheRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.insert.getData();
      return abiEncodedTransactionData;
    }
  };
  public getBeneficiary = {
    async callAsync(
      _tokenID: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as TrancheRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getBeneficiary.call,
        self.web3ContractInstance
      )(_tokenID);
      return result;
    }
  };
  public getCDO = {
    async callAsync(
      _tokenID: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as TrancheRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getCDO.call,
        self.web3ContractInstance
      )(_tokenID);
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
  ): Promise<TrancheRegistryContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new TrancheRegistryContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<TrancheRegistryContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new TrancheRegistryContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/TrancheRegistry.json",
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
