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

export class KittyMintingContract extends BaseContract {
  public supportsInterface = {
    async callAsync(
      _interfaceID: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as KittyMintingContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.supportsInterface.call,
        self.web3ContractInstance
      )(_interfaceID);
      return result;
    }
  };
  public cfoAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.tokenMetadata.call,
        self.web3ContractInstance
      )(_tokenId, _preferredTransport);
      return result;
    }
  };
  public promoCreatedCount = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.promoCreatedCount.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public name = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
      return abiEncodedTransactionData;
    }
  };
  public ceoAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.ceoAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public GEN0_STARTING_PRICE = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.GEN0_STARTING_PRICE.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public setSiringAuctionAddress = {
    async sendTransactionAsync(
      _address: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setSiringAuctionAddress.estimateGasAsync.bind(self, _address)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setSiringAuctionAddress,
        self.web3ContractInstance
      )(_address, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _address: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setSiringAuctionAddress.estimateGas,
        self.web3ContractInstance
      )(_address, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _address: string,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setSiringAuctionAddress.getData();
      return abiEncodedTransactionData;
    }
  };
  public totalSupply = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.totalSupply.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public pregnantKitties = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.pregnantKitties.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public isPregnant = {
    async callAsync(
      _kittyId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as KittyMintingContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isPregnant.call,
        self.web3ContractInstance
      )(_kittyId);
      return result;
    }
  };
  public GEN0_AUCTION_DURATION = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.GEN0_AUCTION_DURATION.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public siringAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
      return abiEncodedTransactionData;
    }
  };
  public setGeneScienceAddress = {
    async sendTransactionAsync(
      _address: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setGeneScienceAddress.estimateGasAsync.bind(self, _address)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setGeneScienceAddress,
        self.web3ContractInstance
      )(_address, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _address: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setGeneScienceAddress.estimateGas,
        self.web3ContractInstance
      )(_address, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _address: string,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setGeneScienceAddress.getData();
      return abiEncodedTransactionData;
    }
  };
  public setCEO = {
    async sendTransactionAsync(
      _newCEO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCEO.estimateGas,
        self.web3ContractInstance
      )(_newCEO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCEO: string, txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCEO.getData();
      return abiEncodedTransactionData;
    }
  };
  public setCOO = {
    async sendTransactionAsync(
      _newCOO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCOO.estimateGas,
        self.web3ContractInstance
      )(_newCOO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCOO: string, txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCOO.getData();
      return abiEncodedTransactionData;
    }
  };
  public createSaleAuction = {
    async sendTransactionAsync(
      _kittyId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.createSaleAuction.estimateGasAsync.bind(
          self,
          _kittyId,
          _startingPrice,
          _endingPrice,
          _duration
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.createSaleAuction,
        self.web3ContractInstance
      )(_kittyId, _startingPrice, _endingPrice, _duration, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _kittyId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.createSaleAuction.estimateGas,
        self.web3ContractInstance
      )(_kittyId, _startingPrice, _endingPrice, _duration, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _kittyId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.createSaleAuction.getData();
      return abiEncodedTransactionData;
    }
  };
  public unpause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.unpause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
      return abiEncodedTransactionData;
    }
  };
  public sireAllowedToAddress = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.sireAllowedToAddress.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public canBreedWith = {
    async callAsync(
      _matronId: BigNumber,
      _sireId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as KittyMintingContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.canBreedWith.call,
        self.web3ContractInstance
      )(_matronId, _sireId);
      return result;
    }
  };
  public kittyIndexToApproved = {
    async callAsync(
      index_0: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.kittyIndexToApproved.call,
        self.web3ContractInstance
      )(index_0);
      return result;
    }
  };
  public createSiringAuction = {
    async sendTransactionAsync(
      _kittyId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.createSiringAuction.estimateGasAsync.bind(
          self,
          _kittyId,
          _startingPrice,
          _endingPrice,
          _duration
        )
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.createSiringAuction,
        self.web3ContractInstance
      )(_kittyId, _startingPrice, _endingPrice, _duration, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _kittyId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.createSiringAuction.estimateGas,
        self.web3ContractInstance
      )(_kittyId, _startingPrice, _endingPrice, _duration, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _kittyId: BigNumber,
      _startingPrice: BigNumber,
      _endingPrice: BigNumber,
      _duration: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.createSiringAuction.getData();
      return abiEncodedTransactionData;
    }
  };
  public setAutoBirthFee = {
    async sendTransactionAsync(
      val: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setAutoBirthFee.estimateGasAsync.bind(self, val)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setAutoBirthFee,
        self.web3ContractInstance
      )(val, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      val: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setAutoBirthFee.estimateGas,
        self.web3ContractInstance
      )(val, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(val: BigNumber, txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setAutoBirthFee.getData();
      return abiEncodedTransactionData;
    }
  };
  public approveSiring = {
    async sendTransactionAsync(
      _addr: string,
      _sireId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.approveSiring.estimateGasAsync.bind(self, _addr, _sireId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.approveSiring,
        self.web3ContractInstance
      )(_addr, _sireId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _addr: string,
      _sireId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.approveSiring.estimateGas,
        self.web3ContractInstance
      )(_addr, _sireId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _addr: string,
      _sireId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.approveSiring.getData();
      return abiEncodedTransactionData;
    }
  };
  public setCFO = {
    async sendTransactionAsync(
      _newCFO: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setCFO.estimateGas,
        self.web3ContractInstance
      )(_newCFO, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(_newCFO: string, txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setCFO.getData();
      return abiEncodedTransactionData;
    }
  };
  public createPromoKitty = {
    async sendTransactionAsync(
      _genes: BigNumber,
      _owner: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.createPromoKitty.estimateGasAsync.bind(self, _genes, _owner)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.createPromoKitty,
        self.web3ContractInstance
      )(_genes, _owner, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _genes: BigNumber,
      _owner: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.createPromoKitty.estimateGas,
        self.web3ContractInstance
      )(_genes, _owner, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _genes: BigNumber,
      _owner: string,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.createPromoKitty.getData();
      return abiEncodedTransactionData;
    }
  };
  public setSecondsPerBlock = {
    async sendTransactionAsync(
      secs: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setSecondsPerBlock.estimateGas,
        self.web3ContractInstance
      )(secs, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(secs: BigNumber, txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setSecondsPerBlock.getData();
      return abiEncodedTransactionData;
    }
  };
  public paused = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<boolean> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.ownerOf.call,
        self.web3ContractInstance
      )(_tokenId);
      return result;
    }
  };
  public GEN0_CREATION_LIMIT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.GEN0_CREATION_LIMIT.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public setSaleAuctionAddress = {
    async sendTransactionAsync(
      _address: string,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.setSaleAuctionAddress.estimateGasAsync.bind(self, _address)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.setSaleAuctionAddress,
        self.web3ContractInstance
      )(_address, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _address: string,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.setSaleAuctionAddress.estimateGas,
        self.web3ContractInstance
      )(_address, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _address: string,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setSaleAuctionAddress.getData();
      return abiEncodedTransactionData;
    }
  };
  public balanceOf = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.balanceOf.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public secondsPerBlock = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.secondsPerBlock.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public pause = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.pause.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
      return abiEncodedTransactionData;
    }
  };
  public tokensOfOwner = {
    async callAsync(
      _owner: string,
      defaultBlock?: Web3.BlockParam
    ): Promise<BigNumber[]> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber[]>(
        self.web3ContractInstance.tokensOfOwner.call,
        self.web3ContractInstance
      )(_owner);
      return result;
    }
  };
  public giveBirth = {
    async sendTransactionAsync(
      _matronId: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.giveBirth.estimateGasAsync.bind(self, _matronId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.giveBirth,
        self.web3ContractInstance
      )(_matronId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _matronId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.giveBirth.estimateGas,
        self.web3ContractInstance
      )(_matronId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _matronId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.giveBirth.getData();
      return abiEncodedTransactionData;
    }
  };
  public withdrawAuctionBalances = {
    async sendTransactionAsync(txData: TxData = {}): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.withdrawAuctionBalances.estimateGasAsync.bind(self)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.withdrawAuctionBalances,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(txData: TxData = {}): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.withdrawAuctionBalances.estimateGas,
        self.web3ContractInstance
      )(txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(txData: TxData = {}): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.withdrawAuctionBalances.getData();
      return abiEncodedTransactionData;
    }
  };
  public symbol = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
      return abiEncodedTransactionData;
    }
  };
  public cooAddress = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.cooAddress.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public autoBirthFee = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.autoBirthFee.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public erc721Metadata = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.erc721Metadata.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public createGen0Auction = {
    async sendTransactionAsync(
      _genes: BigNumber,
      txData: TxData = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.createGen0Auction.estimateGasAsync.bind(self, _genes)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.createGen0Auction,
        self.web3ContractInstance
      )(_genes, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _genes: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.createGen0Auction.estimateGas,
        self.web3ContractInstance
      )(_genes, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _genes: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.createGen0Auction.getData();
      return abiEncodedTransactionData;
    }
  };
  public isReadyToBreed = {
    async callAsync(
      _kittyId: BigNumber,
      defaultBlock?: Web3.BlockParam
    ): Promise<boolean> {
      const self = this as KittyMintingContract;
      const result = await promisify<boolean>(
        self.web3ContractInstance.isReadyToBreed.call,
        self.web3ContractInstance
      )(_kittyId);
      return result;
    }
  };
  public PROMO_CREATION_LIMIT = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.PROMO_CREATION_LIMIT.call,
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
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
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.setMetadataAddress.getData();
      return abiEncodedTransactionData;
    }
  };
  public saleAuction = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.saleAuction.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public bidOnSiringAuction = {
    async sendTransactionAsync(
      _sireId: BigNumber,
      _matronId: BigNumber,
      txData: TxDataPayable = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.bidOnSiringAuction.estimateGasAsync.bind(self, _sireId, _matronId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.bidOnSiringAuction,
        self.web3ContractInstance
      )(_sireId, _matronId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _sireId: BigNumber,
      _matronId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.bidOnSiringAuction.estimateGas,
        self.web3ContractInstance
      )(_sireId, _matronId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _sireId: BigNumber,
      _matronId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.bidOnSiringAuction.getData();
      return abiEncodedTransactionData;
    }
  };
  public gen0CreatedCount = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<BigNumber> {
      const self = this as KittyMintingContract;
      const result = await promisify<BigNumber>(
        self.web3ContractInstance.gen0CreatedCount.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public geneScience = {
    async callAsync(defaultBlock?: Web3.BlockParam): Promise<string> {
      const self = this as KittyMintingContract;
      const result = await promisify<string>(
        self.web3ContractInstance.geneScience.call,
        self.web3ContractInstance
      )();
      return result;
    }
  };
  public breedWithAuto = {
    async sendTransactionAsync(
      _matronId: BigNumber,
      _sireId: BigNumber,
      txData: TxDataPayable = {}
    ): Promise<string> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
        txData,
        self.breedWithAuto.estimateGasAsync.bind(self, _matronId, _sireId)
      );
      const txHash = await promisify<string>(
        self.web3ContractInstance.breedWithAuto,
        self.web3ContractInstance
      )(_matronId, _sireId, txDataWithDefaults);
      return txHash;
    },
    async estimateGasAsync(
      _matronId: BigNumber,
      _sireId: BigNumber,
      txData: TxData = {}
    ): Promise<number> {
      const self = this as KittyMintingContract;
      const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(txData);
      const gas = await promisify<number>(
        self.web3ContractInstance.breedWithAuto.estimateGas,
        self.web3ContractInstance
      )(_matronId, _sireId, txDataWithDefaults);
      return gas;
    },
    getABIEncodedTransactionData(
      _matronId: BigNumber,
      _sireId: BigNumber,
      txData: TxData = {}
    ): string {
      const self = this as KittyMintingContract;
      const abiEncodedTransactionData = self.web3ContractInstance.breedWithAuto.getData();
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
  ): Promise<KittyMintingContract> {
    const currentNetwork = web3.version.network;
    const { abi, networks } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth
      .contract(abi)
      .at(networks[currentNetwork].address);

    return new KittyMintingContract(web3ContractInstance, defaults);
  }
  static async at(
    address: string,
    web3: Web3,
    defaults: Partial<TxData>
  ): Promise<KittyMintingContract> {
    const { abi } = await this.getArtifactsData(web3);
    const web3ContractInstance = web3.eth.contract(abi).at(address);

    return new KittyMintingContract(web3ContractInstance, defaults);
  }
  private static async getArtifactsData(web3: Web3): Promise<any> {
    try {
      const artifact = await fs.readFile(
        "build/contracts/KittyMinting.json",
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
