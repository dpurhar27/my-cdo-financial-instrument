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

export class DebtTokenContract extends BaseContract {
  public revokeTokenURIAuthorization = {
    async sendTransactionAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeTokenURIAuthorization.estimateGasAsync.bind(self, _agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeTokenURIAuthorization,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeTokenURIAuthorization.estimateGas,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_agent: string, txData: TxData = {}): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeTokenURIAuthorization.getData();
      return abiEncodedTransactionData;
    }
  };
  public supportsInterface = {
    async callAsync(
      interfaceID: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DebtTokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.supportsInterface.call,
        self.web3ContractInstance
      )(interfaceID);
      return result;
    }
  };
  public getAuthorizedMintAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DebtTokenContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getAuthorizedMintAgents.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public name = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.name.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getApproved = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.getApproved.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public approve = {
    async sendTransactionAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.approve.estimateGasAsync.bind(self, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.approve,
        self.web3ContractInstance
      )(_to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.approve.estimateGas,
        self.web3ContractInstance
      )(_to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
      return abiEncodedTransactionData;
    }
  };
  public setTokenURI = {
    async sendTransactionAsync(
      _tokenId: BigNumber,
      _uri: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setTokenURI.estimateGasAsync.bind(self, _tokenId, _uri)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setTokenURI,
        self.web3ContractInstance
      )(_tokenId, _uri, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _tokenId: BigNumber,
      _uri: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setTokenURI.estimateGas,
        self.web3ContractInstance
      )(_tokenId, _uri, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _tokenId: BigNumber,
      _uri: string,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setTokenURI.getData();
      return abiEncodedTransactionData;
    }
  };
  public totalSupply = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as DebtTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.totalSupply.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public CREATION_CONTEXT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.CREATION_CONTEXT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getAuthorizedTokenURIAgents = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string[]> {
      const self = this as DebtTokenContract;
      const result = await promisify<string[]>(
        self.web3ContractInstance.getAuthorizedTokenURIAgents.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public transferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transferFrom,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public tokenOfOwnerByIndex = {
    async callAsync(
      _owner: string,
      _index: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DebtTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.tokenOfOwnerByIndex.call,
        self.web3ContractInstance
      )(_owner, _index);
      return result;
    }
  };
  public addAuthorizedTokenURIAgent = {
    async sendTransactionAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addAuthorizedTokenURIAgent.estimateGasAsync.bind(self, _agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.addAuthorizedTokenURIAgent,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.addAuthorizedTokenURIAgent.estimateGas,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_agent: string, txData: TxData = {}): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedTokenURIAgent.getData();
      return abiEncodedTransactionData;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as DebtTokenContract;
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
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public safeTransferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.safeTransferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.safeTransferFrom,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.safeTransferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.safeTransferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public exists = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DebtTokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.exists.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public tokenByIndex = {
    async callAsync(
      _index: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DebtTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.tokenByIndex.call,
        self.web3ContractInstance
      )(_index);
      return result;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as DebtTokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.paused.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public ownerOf = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.ownerOf.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public balanceOf = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as DebtTokenContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.balanceOf.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public registry = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.registry.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public revokeMintAgentAuthorization = {
    async sendTransactionAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.revokeMintAgentAuthorization.estimateGasAsync.bind(self, _agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.revokeMintAgentAuthorization,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.revokeMintAgentAuthorization.estimateGas,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_agent: string, txData: TxData = {}): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.revokeMintAgentAuthorization.getData();
      return abiEncodedTransactionData;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as DebtTokenContract;
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
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public owner = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.owner.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public symbol = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.symbol.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public create = {
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
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.create.estimateGasAsync.bind(
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
        self.web3ContractInstance.create,
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
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.create.estimateGas,
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
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.create.getData();
      return abiEncodedTransactionData;
    }
  };
  public addAuthorizedMintAgent = {
    async sendTransactionAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.addAuthorizedMintAgent.estimateGasAsync.bind(self, _agent)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.addAuthorizedMintAgent,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _agent: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.addAuthorizedMintAgent.estimateGas,
        self.web3ContractInstance
      )(_agent, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_agent: string, txData: TxData = {}): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedMintAgent.getData();
      return abiEncodedTransactionData;
    }
  };
  public setApprovalForAll = {
    async sendTransactionAsync(
      _to: string,
      _approved: boolean,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setApprovalForAll.estimateGasAsync.bind(self, _to, _approved)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setApprovalForAll,
        self.web3ContractInstance
      )(_to, _approved, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _approved: boolean,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setApprovalForAll.estimateGas,
        self.web3ContractInstance
      )(_to, _approved, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _approved: boolean,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setApprovalForAll.getData();
      return abiEncodedTransactionData;
    }
  };
  public transfer = {
    async sendTransactionAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.transfer.estimateGasAsync.bind(self, _to, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.transfer,
        self.web3ContractInstance
      )(_to, _tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.transfer.estimateGas,
        self.web3ContractInstance
      )(_to, _tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
      return abiEncodedTransactionData;
    }
  };
  public URI_CONTEXT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.URI_CONTEXT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public safeTransferFrom = {
    async sendTransactionAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.safeTransferFrom.estimateGasAsync.bind(
          self,
          _from,
          _to,
          _tokenId,
          _data
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.safeTransferFrom,
        self.web3ContractInstance
      )(_from, _to, _tokenId, _data, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as DebtTokenContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.safeTransferFrom.estimateGas,
        self.web3ContractInstance
      )(_from, _to, _tokenId, _data, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _from: string,
      _to: string,
      _tokenId: BigNumber,
      _data: string,
      txData: TxData = {}
    ): string {
      const self = this as DebtTokenContract;
      const abiEncodedTransactionData = self.web3ContractInstance.safeTransferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public tokenURI = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as DebtTokenContract;
      const result = await promisify<string>(
        self.web3ContractInstance.tokenURI.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public isApprovedForAll = {
    async callAsync(
      _owner: string,
      _operator: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as DebtTokenContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isApprovedForAll.call,
        self.web3ContractInstance
      )(_owner, _operator);
      return result;
    }
  };
  public transferOwnership = {
    async sendTransactionAsync(
      newOwner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as DebtTokenContract;
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
      const self = this as DebtTokenContract;
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
      const self = this as DebtTokenContract;
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
  ): Promise<DebtTokenContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new DebtTokenContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<DebtTokenContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new DebtTokenContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/DebtToken.json",
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
