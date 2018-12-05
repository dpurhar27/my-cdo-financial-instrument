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

export class MockDebtRegistryContract extends BaseContract {
  public getMockReturnValue = {
    async callAsync(
      functionName: string,
      argsSignature: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getMockReturnValue.call,
        self.web3ContractInstance
      )(functionName, argsSignature);
      return result;
    }
  };
  public mockGetTermsContractReturnValueFor = {
    async sendTransactionAsync(
      agreementId: string,
      termsContract: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockGetTermsContractReturnValueFor.estimateGasAsync.bind(
          self,
          agreementId,
          termsContract
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockGetTermsContractReturnValueFor,
        self.web3ContractInstance
      )(agreementId, termsContract, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      termsContract: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockGetTermsContractReturnValueFor
          .estimateGas,
        self.web3ContractInstance
      )(agreementId, termsContract, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      termsContract: string,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockGetTermsContractReturnValueFor.getData();
      return abiEncodedTransactionData;
    }
  };
  public wasInsertCalledWith = {
    async callAsync(
      _version: string,
      _beneficiary: string,
      _debtor: string,
      _underwriter: string,
      _underwriterRiskRating: BigNumber,
      _termsContract: string,
      _termsContractParameters: string,
      _salt: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasInsertCalledWith.call,
        self.web3ContractInstance
      )(
        _version,
        _beneficiary,
        _debtor,
        _underwriter,
        _underwriterRiskRating,
        _termsContract,
        _termsContractParameters,
        _salt
      );
      return result;
    }
  };
  public getTermsContractParameters = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getTermsContractParameters.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public modifyBeneficiary = {
    async sendTransactionAsync(
      agreementId: string,
      newBeneficiary: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.modifyBeneficiary.getData();
      return abiEncodedTransactionData;
    }
  };
  public getTerms = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<[string, string]> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<[string, string]>(
        self.web3ContractInstance.getTerms.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public mockGetTermsContractParameters = {
    async sendTransactionAsync(
      agreementId: string,
      params: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockGetTermsContractParameters.estimateGasAsync.bind(
          self,
          agreementId,
          params
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockGetTermsContractParameters,
        self.web3ContractInstance
      )(agreementId, params, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      params: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockGetTermsContractParameters.estimateGas,
        self.web3ContractInstance
      )(agreementId, params, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      params: string,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockGetTermsContractParameters.getData();
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
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockReturnValue.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockGetIssuanceBlockTimestamp = {
    async sendTransactionAsync(
      agreementId: string,
      timestamp: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockGetIssuanceBlockTimestamp.estimateGasAsync.bind(
          self,
          agreementId,
          timestamp
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockGetIssuanceBlockTimestamp,
        self.web3ContractInstance
      )(agreementId, timestamp, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      timestamp: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockGetIssuanceBlockTimestamp.estimateGas,
        self.web3ContractInstance
      )(agreementId, timestamp, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      timestamp: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockGetIssuanceBlockTimestamp.getData();
      return abiEncodedTransactionData;
    }
  };
  public doesEntryExist = {
    async sendTransactionAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.doesEntryExist.estimateGasAsync.bind(self, agreementId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.doesEntryExist,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.doesEntryExist.estimateGas,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.doesEntryExist.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockInsertReturnValue = {
    async sendTransactionAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockInsertReturnValue.estimateGasAsync.bind(self, agreementId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockInsertReturnValue,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockInsertReturnValue.estimateGas,
        self.web3ContractInstance
      )(agreementId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockInsertReturnValue.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockDoesEntryExist = {
    async sendTransactionAsync(
      agreementId: string,
      exists: boolean,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockDoesEntryExist.estimateGasAsync.bind(self, agreementId, exists)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockDoesEntryExist,
        self.web3ContractInstance
      )(agreementId, exists, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      exists: boolean,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockDoesEntryExist.estimateGas,
        self.web3ContractInstance
      )(agreementId, exists, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      exists: boolean,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockDoesEntryExist.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockGetTermsReturnValueFor = {
    async sendTransactionAsync(
      agreementId: string,
      termsContract: string,
      termsContractParameters: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockGetTermsReturnValueFor.estimateGasAsync.bind(
          self,
          agreementId,
          termsContract,
          termsContractParameters
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockGetTermsReturnValueFor,
        self.web3ContractInstance
      )(
        agreementId,
        termsContract,
        termsContractParameters,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      termsContract: string,
      termsContractParameters: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockGetTermsReturnValueFor.estimateGas,
        self.web3ContractInstance
      )(
        agreementId,
        termsContract,
        termsContractParameters,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      termsContract: string,
      termsContractParameters: string,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockGetTermsReturnValueFor.getData();
      return abiEncodedTransactionData;
    }
  };
  public getBeneficiary = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getBeneficiary.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
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
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.insert.getData();
      return abiEncodedTransactionData;
    }
  };
  public getIssuanceBlockTimestamp = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getIssuanceBlockTimestamp.call,
        self.web3ContractInstance
      )(agreementId);
      return result;
    }
  };
  public reset = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as MockDebtRegistryContract;
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
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.reset.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.reset.getData();
      return abiEncodedTransactionData;
    }
  };
  public mockGetBeneficiaryReturnValueFor = {
    async sendTransactionAsync(
      agreementId: string,
      beneficiary: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.mockGetBeneficiaryReturnValueFor.estimateGasAsync.bind(
          self,
          agreementId,
          beneficiary
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.mockGetBeneficiaryReturnValueFor,
        self.web3ContractInstance
      )(agreementId, beneficiary, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      agreementId: string,
      beneficiary: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as MockDebtRegistryContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.mockGetBeneficiaryReturnValueFor.estimateGas,
        self.web3ContractInstance
      )(agreementId, beneficiary, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      agreementId: string,
      beneficiary: string,
      txData: TxData = {}
    ): string {
      const self = this as MockDebtRegistryContract;
      const abiEncodedTransactionData = self.web3ContractInstance.mockGetBeneficiaryReturnValueFor.getData();
      return abiEncodedTransactionData;
    }
  };
  public wasModifyBeneficiaryCalledWith = {
    async callAsync(
      agreementId: string,
      newBeneficiary: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.wasModifyBeneficiaryCalledWith.call,
        self.web3ContractInstance
      )(agreementId, newBeneficiary);
      return result;
    }
  };
  public getTermsContract = {
    async callAsync(
      agreementId: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as MockDebtRegistryContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getTermsContract.call,
        self.web3ContractInstance
      )(agreementId);
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
  ): Promise<MockDebtRegistryContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new MockDebtRegistryContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<MockDebtRegistryContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new MockDebtRegistryContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/MockDebtRegistry.json",
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
