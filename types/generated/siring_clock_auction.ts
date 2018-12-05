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

export class SiringClockAuctionContract extends BaseContract {
  public createAuction = {
    async sendTransactionAsync(
      _tokenId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      _seller: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.createAuction.estimateGasAsync.bind(
          self,
          _tokenId,
          _startingPrice,
          _endingPrice,
          _duration,
          _seller
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.createAuction,
        self.web3ContractInstance
      )(
        _tokenId,
        _startingPrice,
        _endingPrice,
        _duration,
        _seller,
        txDataWithDefaults
      );
      return txHash;
    },
    async estimateGasAsync(
      _tokenId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      _seller: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.createAuction.estimateGas,
        self.web3ContractInstance
      )(
        _tokenId,
        _startingPrice,
        _endingPrice,
        _duration,
        _seller,
        txDataWithDefaults
      );
      return gas;
    },
    getABIEncodedTransactionData(
      _tokenId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      _seller: string,
      txData: TxData = {}
    ): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.createAuction.getData();
      return abiEncodedTransactionData;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as SiringClockAuctionContract;
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
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public bid = {
    async sendTransactionAsync(
      _tokenId: BigNumber,
      txData: TxDataPayable = {}
    ): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.bid.estimateGasAsync.bind(self, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.bid,
        self.web3ContractInstance
      )(_tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.bid.estimateGas,
        self.web3ContractInstance
      )(_tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.bid.getData();
      return abiEncodedTransactionData;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.paused.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public withdrawBalance = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.withdrawBalance.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.withdrawBalance,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.withdrawBalance.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.withdrawBalance.getData();
      return abiEncodedTransactionData;
    }
  };
  public isSiringClockAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isSiringClockAuction.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public getAuction = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<[string, BigNumber, BigNumber, BigNumber, BigNumber]> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<
        [string, BigNumber, BigNumber, BigNumber, BigNumber]
      >(self.web3ContractInstance.getAuction.call, self.web3ContractInstance)(
        _tokenId
      );
      return result;
    }
  };
  public ownerCut = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.ownerCut.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as SiringClockAuctionContract;
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
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public cancelAuctionWhenPaused = {
    async sendTransactionAsync(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.cancelAuctionWhenPaused.estimateGasAsync.bind(self, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.cancelAuctionWhenPaused,
        self.web3ContractInstance
      )(_tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.cancelAuctionWhenPaused.estimateGas,
        self.web3ContractInstance
      )(_tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.cancelAuctionWhenPaused.getData();
      return abiEncodedTransactionData;
    }
  };
  public owner = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<string>(
        self.web3ContractInstance.owner.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public cancelAuction = {
    async sendTransactionAsync(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.cancelAuction.estimateGasAsync.bind(self, _tokenId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.cancelAuction,
        self.web3ContractInstance
      )(_tokenId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as SiringClockAuctionContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.cancelAuction.estimateGas,
        self.web3ContractInstance
      )(_tokenId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _tokenId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as SiringClockAuctionContract;
      const abiEncodedTransactionData = self.web3ContractInstance.cancelAuction.getData();
      return abiEncodedTransactionData;
    }
  };
  public getCurrentPrice = {
    async callAsync(
      _tokenId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.getCurrentPrice.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public nonFungibleContract = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as SiringClockAuctionContract;
      const result = await promisify<string>(
        self.web3ContractInstance.nonFungibleContract.call,
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
      const self = this as SiringClockAuctionContract;
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
      const self = this as SiringClockAuctionContract;
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
      const self = this as SiringClockAuctionContract;
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
  ): Promise<SiringClockAuctionContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new SiringClockAuctionContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<SiringClockAuctionContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new SiringClockAuctionContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/SiringClockAuction.json",
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
