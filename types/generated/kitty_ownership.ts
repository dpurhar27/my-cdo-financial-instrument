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

export class KittyOwnershipContract extends BaseContract {
  public supportsInterface = {
    async callAsync(
      _interfaceID: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.supportsInterface.call,
        self.web3ContractInstance
      )(_interfaceID);
      return result;
    }
  };
  public cfoAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.cfoAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public tokenMetadata = {
    async callAsync(
      _tokenId: BigNumber,
      _preferredTransport: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.tokenMetadata.call,
        self.web3ContractInstance
      )(_tokenId, _preferredTransport);
      return result;
    }
  };
  public name = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.name.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public approve = {
    async sendTransactionAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
      return abiEncodedTransactionData;
    }
  };
  public ceoAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.ceoAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public totalSupply = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.totalSupply.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public siringAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.siringAuction.call,
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public setCEO = {
    async sendTransactionAsync(
      _newCEO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCEO.estimateGas,
        self.web3ContractInstance
      )(_newCEO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCEO: string, txData: TxData = {}): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCEO.getData();
      return abiEncodedTransactionData;
    }
  };
  public setCOO = {
    async sendTransactionAsync(
      _newCOO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCOO.estimateGas,
        self.web3ContractInstance
      )(_newCOO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCOO: string, txData: TxData = {}): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCOO.getData();
      return abiEncodedTransactionData;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public sireAllowedToAddress = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCFO.estimateGas,
        self.web3ContractInstance
      )(_newCFO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCFO: string, txData: TxData = {}): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCFO.getData();
      return abiEncodedTransactionData;
    }
  };
  public setSecondsPerBlock = {
    async sendTransactionAsync(
      secs: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setSecondsPerBlock.estimateGas,
        self.web3ContractInstance
      )(secs, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(secs: BigNumber, txData: TxData = {}): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setSecondsPerBlock.getData();
      return abiEncodedTransactionData;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.balanceOf.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public secondsPerBlock = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.secondsPerBlock.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public tokensOfOwner = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber[]> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<BigNumber[]>(
        self.web3ContractInstance.tokensOfOwner.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public symbol = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.symbol.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public cooldowns = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.kittyIndexToOwner.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public transfer = {
    async sendTransactionAsync(
      _to: string,
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
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
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
      return abiEncodedTransactionData;
    }
  };
  public cooAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.cooAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public erc721Metadata = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
      const result = await promisify<string>(
        self.web3ContractInstance.erc721Metadata.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public setMetadataAddress = {
    async sendTransactionAsync(
      _contractAddress: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setMetadataAddress.estimateGasAsync.bind(self, _contractAddress)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setMetadataAddress,
        self.web3ContractInstance
      )(_contractAddress, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _contractAddress: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyOwnershipContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setMetadataAddress.estimateGas,
        self.web3ContractInstance
      )(_contractAddress, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _contractAddress: string,
      txData: TxData = {}
    ): string {
      const self = this as KittyOwnershipContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setMetadataAddress.getData();
      return abiEncodedTransactionData;
    }
  };
  public saleAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyOwnershipContract;
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
  ): Promise<KittyOwnershipContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new KittyOwnershipContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<KittyOwnershipContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new KittyOwnershipContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/KittyOwnership.json",
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
