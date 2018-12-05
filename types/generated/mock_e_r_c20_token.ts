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

export class MockERC20TokenContract extends BaseContract {
  public approve = {
    async sendTransactionAsync(
      _to: string,
      _allowance: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.approve.estimateGasAsync.bind(self, _to, _allowance)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.approve,
        self.web3ContractInstance
      )(_to, _allowance, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _allowance: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.approve.estimateGas,
        self.web3ContractInstance
      )(_to, _allowance, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _allowance: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
      return abiEncodedTransactionData;
    }
  };
  public wasTransferCalledWith = {
    async callAsync(
      _to: string,
      _amount: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockERC20TokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasTransferCalledWith.call,
        self.web3ContractInstance
      )(_to, _amount);
      return result;
    }
  };
  public getMockReturnValue = {
    async callAsync(
      functionName: string,
      argsSignature: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockERC20TokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getMockReturnValue.call,
        self.web3ContractInstance
      )(functionName, argsSignature);
      return result;
    }
  };
  public transferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _amount: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferFrom.estimateGasAsync.bind(self, _from, _to, _amount)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transferFrom,
        self.web3ContractInstance
      )(_from, _to, _amount, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _amount: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _amount, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _amount: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockBalanceOfFor = {
    async sendTransactionAsync(
      _owner: string,
      _balance: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockBalanceOfFor.estimateGasAsync.bind(self, _owner, _balance)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockBalanceOfFor,
        self.web3ContractInstance
      )(_owner, _balance, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _owner: string,
      _balance: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockBalanceOfFor.estimateGas,
        self.web3ContractInstance
      )(_owner, _balance, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _owner: string,
      _balance: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockBalanceOfFor.getData();
      return abiEncodedTransactionData;
    }
  };
  public balanceOf = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as MockERC20TokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.balanceOf.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public wasTransferFromCalledWith = {
    async callAsync(
      _from: string,
      _to: string,
      _amount: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockERC20TokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasTransferFromCalledWith.call,
        self.web3ContractInstance
      )(_from, _to, _amount);
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
      const self = this as MockERC20TokenContract;
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
      const self = this as MockERC20TokenContract;
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
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockReturnValue.getData();
      return abiEncodedTransactionData;
    }
  };
  public transfer = {
    async sendTransactionAsync(
      _to: string,
      _amount: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transfer.estimateGasAsync.bind(self, _to, _amount)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transfer,
        self.web3ContractInstance
      )(_to, _amount, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _amount: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transfer.estimateGas,
        self.web3ContractInstance
      )(_to, _amount, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _amount: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
      return abiEncodedTransactionData;
    }
  };
  public wasApproveCalledWith = {
    async callAsync(
      _to: string,
      _allowance: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockERC20TokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasApproveCalledWith.call,
        self.web3ContractInstance
      )(_to, _allowance);
      return result;
    }
  };
  public reset = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as MockERC20TokenContract;
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
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.reset.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.reset.getData();
      return abiEncodedTransactionData;
    }
  };
  public allowance = {
    async callAsync(
      _owner: string,
      _to: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as MockERC20TokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.allowance.call,
        self.web3ContractInstance
      )(_owner, _to);
      return result;
    }
  };
  public mockAllowanceFor = {
    async sendTransactionAsync(
      _owner: string,
      _to: string,
      _allowance: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockAllowanceFor.estimateGasAsync.bind(
          self,
          _owner,
          _to,
          _allowance
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockAllowanceFor,
        self.web3ContractInstance
      )(_owner, _to, _allowance, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _owner: string,
      _to: string,
      _allowance: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockERC20TokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockAllowanceFor.estimateGas,
        self.web3ContractInstance
      )(_owner, _to, _allowance, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _owner: string,
      _to: string,
      _allowance: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as MockERC20TokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockAllowanceFor.getData();
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
  ): Promise<MockERC20TokenContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new MockERC20TokenContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<MockERC20TokenContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new MockERC20TokenContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/MockERC20Token.json",
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
