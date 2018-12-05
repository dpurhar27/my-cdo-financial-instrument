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

export class DebtRegistryContract extends BaseContract {
  public EDIT_CONTEXT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.EDIT_CONTEXT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getTermsContractParameters = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getTermsContractParameters.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as DebtRegistryContract;
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
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public addAuthorizedEditAgent = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addAuthorizedEditAgent.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.addAuthorizedEditAgent,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.addAuthorizedEditAgent.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedEditAgent.getData();
      return abiEncodedTransactionData;
    }
  };
  public modifyBeneficiary = {
    async sendTransactionAsync(
      agreementId: string,
      newBeneficiary: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.modifyBeneficiary.estimateGasAsync.bind(
          self,
          agreementId,
          newBeneficiary
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.modifyBeneficiary,
        self.web3ContractInstance
      )(agreementId, newBeneficiary, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      newBeneficiary: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.modifyBeneficiary.estimateGas,
        self.web3ContractInstance
      )(agreementId, newBeneficiary, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      newBeneficiary: string,
      txData: TxData = {}
    ): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.modifyBeneficiary.getData();
      return abiEncodedTransactionData;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as DebtRegistryContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.paused.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getAuthorizedInsertAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getAuthorizedInsertAgents.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getTerms = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<[string, string]> {
      const self = this as DebtRegistryContract;
      const result = await promisify<[string, string]>(
        self.web3ContractInstance.getTerms.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as DebtRegistryContract;
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
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public getDebtorsDebts = {
    async callAsync(
      debtor: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string[]> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getDebtorsDebts.call,
        self.web3ContractInstance
      )(debtor);
      return result;
    }
  };
  public owner = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.owner.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public INSERT_CONTEXT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.INSERT_CONTEXT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public get = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<[string, string, string, BigNumber, string, string, BigNumber]> {
      const self = this as DebtRegistryContract;
      const result = await promisify<
        [string, string, string, BigNumber, string, string, BigNumber]
      >(self.web3ContractInstance.get.call, self.web3ContractInstance)(
        agreementId
      );
      return result;
    }
  };
  public revokeEditAgentAuthorization = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeEditAgentAuthorization.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeEditAgentAuthorization,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeEditAgentAuthorization.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeEditAgentAuthorization.getData();
      return abiEncodedTransactionData;
    }
  };
  public doesEntryExist = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DebtRegistryContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.doesEntryExist.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public addAuthorizedInsertAgent = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addAuthorizedInsertAgent.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.addAuthorizedInsertAgent,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.addAuthorizedInsertAgent.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedInsertAgent.getData();
      return abiEncodedTransactionData;
    }
  };
  public getBeneficiary = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getBeneficiary.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public revokeInsertAgentAuthorization = {
    async sendTransactionAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeInsertAgentAuthorization.estimateGasAsync.bind(self, agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeInsertAgentAuthorization,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeInsertAgentAuthorization.estimateGas,
        self.web3ContractInstance
      )(agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(agent: string, txData: TxData = {}): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeInsertAgentAuthorization.getData();
      return abiEncodedTransactionData;
    }
  };
  public insert = {
    async sendTransactionAsync(
      _version: string,
      _beneficiary: string,
      _debtor: string,
      _underwriter: string,
      _underwriterRiskRating: BigNumber,
      _termsContract: string,
      _termsContractParameters: string,
      _salt: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.insert.estimateGasAsync.bind(
          self,
          _version,
          _beneficiary,
          _debtor,
          _underwriter,
          _underwriterRiskRating,
          _termsContract,
          _termsContractParameters,
          _salt
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.insert,
        self.web3ContractInstance
      )(
        _version,
        _beneficiary,
        _debtor,
        _underwriter,
        _underwriterRiskRating,
        _termsContract,
        _termsContractParameters,
        _salt,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      _version: string,
      _beneficiary: string,
      _debtor: string,
      _underwriter: string,
      _underwriterRiskRating: BigNumber,
      _termsContract: string,
      _termsContractParameters: string,
      _salt: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.insert.estimateGas,
        self.web3ContractInstance
      )(
        _version,
        _beneficiary,
        _debtor,
        _underwriter,
        _underwriterRiskRating,
        _termsContract,
        _termsContractParameters,
        _salt,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      _version: string,
      _beneficiary: string,
      _debtor: string,
      _underwriter: string,
      _underwriterRiskRating: BigNumber,
      _termsContract: string,
      _termsContractParameters: string,
      _salt: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.insert.getData();
      return abiEncodedTransactionData;
    }
  };
  public getIssuanceBlockTimestamp = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DebtRegistryContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getIssuanceBlockTimestamp.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public transferOwnership = {
    async sendTransactionAsync(
      newOwner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtRegistryContract;
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
      const self = this as DebtRegistryContract;
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
      const self = this as DebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
      return abiEncodedTransactionData;
    }
  };
  public getTermsContract = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getTermsContract.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public getAuthorizedEditAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DebtRegistryContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getAuthorizedEditAgents.call,
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
  ): Promise<DebtRegistryContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new DebtRegistryContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<DebtRegistryContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new DebtRegistryContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/DebtRegistry.json",
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
