import { BigNumber } from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "./test_utils/units";

import { DebtKernelContract } from "../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../types/generated/debt_registry";
import { DebtTokenContract } from "../../types/generated/debt_token";
import { DummyTokenContract } from "../../types/generated/dummy_token";
import { TokenRegistryContract } from "../../types/generated/token_registry";
import { RepaymentRouterContract } from "../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract as SimpleInterestTermsContract } from "../../types/generated/simple_interest_terms_contract";
import { TokenTransferProxyContract } from "../../types/generated/token_transfer_proxy";
import { ContractRegistryContract } from "../../types/generated/contract_registry";

import { CDOContract } from "../../types/generated/cdo";
import { CDOLibContract } from "../../types/generated/c_d_o_lib";
import { TrancheTokenContract } from "../../types/generated/tranche_token";
import { TrancheRegistryContract } from "../../types/generated/tranche_registry";

import { DebtKernelErrorCodes } from "../../types/errors";
import { DebtOrder, SignedDebtOrder } from "../../types/kernel/debt_order";

import { BigNumberSetup } from "./test_utils/bignumber_setup";
import ChaiSetup from "./test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "./test_utils/constants";

import { SimpleInterestParameters } from "./factories/terms_contract_parameters";
import { DebtOrderFactory } from "./factories/debt_order_factory";

import leftPad = require("left-pad");

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Artifacts
const cdoCon = artifacts.require("CDO");

contract("Collateralized Debt Obligation", async ACCOUNTS => {
  let repaymentRouter: RepaymentRouterContract;
  let kernel: DebtKernelContract;
  let debtToken: DebtTokenContract;
  let principalToken: DummyTokenContract;
  let termsContract: SimpleInterestTermsContract;
  let tokenTransferProxy: TokenTransferProxyContract;
  let debtRegistry: DebtRegistryContract;
  let contractRegistry: ContractRegistryContract;

  let cdo: CDOContract;
  let cdoLib: CDOLibContract;
  let trancheToken: TrancheTokenContract;
  let trancheRegistry: TrancheRegistryContract;

  let orderFactory: DebtOrderFactory;

  const CONTRACT_OWNER = ACCOUNTS[0];

  const DEBTOR_1 = ACCOUNTS[1];
  const DEBTOR_2 = ACCOUNTS[2];
  const DEBTOR_3 = ACCOUNTS[3];
  const DEBTORS = [DEBTOR_1, DEBTOR_2, DEBTOR_3];

  const SENIOR_1 = ACCOUNTS[4];
  const SENIOR_2 = ACCOUNTS[5];
  const SENIOR_3 = ACCOUNTS[6];
  const SENIOR_4 = ACCOUNTS[7];
  const SENIOR_5 = ACCOUNTS[8];
  const SENIOR_6 = ACCOUNTS[9];
  const SENIORS = [SENIOR_1, SENIOR_2, SENIOR_3, SENIOR_4, SENIOR_5, SENIOR_6];

  const MEZZANINE_1 = ACCOUNTS[10];
  const MEZZANINE_2 = ACCOUNTS[11];
  const MEZZANINE_3 = ACCOUNTS[12];
  const MEZZANINE_4 = ACCOUNTS[13];
  const MEZZANINES = [MEZZANINE_1, MEZZANINE_2, MEZZANINE_3, MEZZANINE_4];

  const THE_CREDITOR = ACCOUNTS[14];
  let creditorBalance: number;

  const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

  const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
  const CDO_CREATOR = { from: THE_CREDITOR, gas: 4000000 };

  let trancheTokens: BigNumber[] = new Array();
  let debtAgreements: string[] = new Array();

  before(async() => {
    const dummyTokenRegistryContract = await TokenRegistryContract.deployed(
      web3,
      TX_DEFAULTS
    );
    const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
      "REP"
    );
    const dummyREPTokenIndex = await dummyTokenRegistryContract.getTokenIndexBySymbol.callAsync(
      "REP"
    );

    principalToken = await DummyTokenContract.at(
      dummyREPTokenAddress,
      web3,
      TX_DEFAULTS
    );

    kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
    debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
    cdoLib = await CDOLibContract.deployed(web3, TX_DEFAULTS);
    tokenTransferProxy = await TokenTransferProxyContract.deployed(
      web3,
      TX_DEFAULTS
    );
    termsContract = await SimpleInterestTermsContract.deployed(
      web3,
      TX_DEFAULTS
    );
    debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
    contractRegistry = await ContractRegistryContract.deployed(
      web3,
      TX_DEFAULTS
    );

    repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
    trancheToken = await TrancheTokenContract.deployed(web3, TX_DEFAULTS);

    // Add the library contract into the bytecode of the CDO.sol before deploying
    cdoCon.bytecode = cdoCon.bytecode.replace(
      /_+CDOLib_+/g,
      cdoLib.address.replace("0x", "")
    );

    /*** Set actors in this scenario with sufficient balances ***/

    await principalToken.setBalance.sendTransactionAsync(
      THE_CREDITOR,
      Units.ether(100)
    );

    await principalToken.setBalance.sendTransactionAsync(
      SENIOR_1,
      Units.ether(100)
    );

  /*** Set actors in this scenario with approval to move balances ***/

    await principalToken.approve.sendTransactionAsync(
      tokenTransferProxy.address,
      Units.ether(100),
      { from: DEBTOR_1 }
    );
    await principalToken.approve.sendTransactionAsync(
      tokenTransferProxy.address,
      Units.ether(100),
      { from: DEBTOR_2 }
    );
    await principalToken.approve.sendTransactionAsync(
      tokenTransferProxy.address,
      Units.ether(100),
      { from: DEBTOR_3 }
    );

    await principalToken.approve.sendTransactionAsync(
      tokenTransferProxy.address,
      Units.ether(100),
      { from: THE_CREDITOR }
    );

    const termsContractParameters = SimpleInterestParameters.pack({
      principalTokenIndex: dummyREPTokenIndex, // The migrations set REP up to be at index 0 of the registry
      principalAmount: Units.ether(1), // principal of 1 ether
      interestRateFixedPoint: Units.interestRateFixedPoint(10), // interest rate of 10%
      amortizationUnitType: new BigNumber(1), // The amortization unit type (weekly)
      termLengthUnits: new BigNumber(1) // Term length in amortization units.
    });

    // The default debt agreement, each param can be modified individually
    const defaultOrderParams = {
      creditorFee: Units.ether(0),
      debtKernelContract: kernel.address,
      debtOrderVersion: kernel.address,
      debtTokenContract: debtToken.address,
      debtor: DEBTOR_1,
      debtorFee: Units.ether(0),
      expirationTimestampInSec: new BigNumber(
        moment()
          .add(1, "days")
          .unix()
      ),
      issuanceVersion: repaymentRouter.address,
      orderSignatories: { debtor: DEBTOR_1, creditor: THE_CREDITOR },
      principalAmount: Units.ether(1),
      principalTokenAddress: principalToken.address,
      relayer: NULL_ADDRESS,
      relayerFee: Units.ether(0),
      termsContract: termsContract.address,
      termsContractParameters,
      underwriter: NULL_ADDRESS,
      underwriterFee: Units.ether(0),
      underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(0)
    };

    orderFactory = new DebtOrderFactory(defaultOrderParams);

    ABIDecoder.addABI(repaymentRouter.abi);
  });

  after(() => {
    ABIDecoder.removeABI(repaymentRouter.abi);
  });

  const createCDOContract = (async (principal : number, _debts : number, _totalIssuances : number, interestRates : number[], numberOfIssuances : number[]) => {

    let debts = new BigNumber(_debts);
    let totalIssuances = new BigNumber(_totalIssuances);

    // Create a CDO with desired parameters
    const cdoContractTruffle = await cdoCon.new(
      contractRegistry.address,
      principalToken.address,
      trancheToken.address,
      interestRates,
      numberOfIssuances,
      Units.ether(principal), // Total value of this CDO (principal)
      debts,
      totalIssuances,
      { from: THE_CREDITOR }
    );

    const cdoContractWeb3 = web3.eth
      .contract(cdoCon.abi)
      .at(cdoContractTruffle.address);

    cdo = new CDOContract(cdoContractWeb3, CDO_CREATOR);

  });

  describe("#Create a CDO where underlying debts can't repay promised amount", () => {
    before(async () => {
      let principal = 10;
      let debts = 1;
      let totalIssuances = 20;
      let interestRates: number[] = [10, 20]; // Seniors interest rate is 10%, Mezzanines is 20%
      let numberOfIssuances: number[] = [10, 10]; // Seniors # of shares is 10, Mezzanines is 10

      await createCDOContract(principal, debts, totalIssuances, interestRates, numberOfIssuances);
    });

      describe("-Create and send the debt to the invalid CDO", () => {
        let agreementId: string;

        before(async () => {
          let signedDebtOrder: SignedDebtOrder;
          let receipt: Web3.TransactionReceipt;

          signedDebtOrder = await orderFactory.generateDebtOrder({
              creditor: THE_CREDITOR,
              debtor: DEBTOR_3,
              orderSignatories: { debtor: DEBTOR_3, creditor: THE_CREDITOR }
            });

            // The unique id used to refer to the debt agreement is the hash of its associated issuance commitment.
            agreementId = signedDebtOrder.getIssuanceCommitment().getHash();
            //trancheTokens.push(new BigNumber(agreementId));
            //debtAgreements.push(agreementId);

            // Creditor fills the signed debt order, creating a debt agreement with a unique associated debt token
            const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
              signedDebtOrder.getCreditor(),
              signedDebtOrder.getOrderAddresses(),
              signedDebtOrder.getOrderValues(),
              signedDebtOrder.getOrderBytes32(),
              signedDebtOrder.getSignaturesV(),
              signedDebtOrder.getSignaturesR(),
              signedDebtOrder.getSignaturesS()
            );

            receipt = await web3.eth.getTransactionReceipt(txHash);

      });

      it("should revert the transaction", async () => {

        let tokenId = new BigNumber(agreementId);

        await expect(
          debtToken.transfer.sendTransactionAsync(
          cdo.address, // to
          tokenId, // tokenId
          { from: THE_CREDITOR }
        )).to.eventually.be.rejectedWith(REVERT_ERROR);

      });

  });

});

  describe("#Create a valid CDO that has Senior and Mezzanine Tranches", () => {
    before(async () => {
      let principal = 1;
      let debts = 3;
      let totalIssuances = 10;
      let interestRates: number[] = [10, 15]; // Seniors interest rate is 10%, Mezzanines is 15%
      let numberOfIssuances: number[] = [6, 4]; // Seniors # of shares is 6, Mezzanines is 4

      await createCDOContract(principal, debts, totalIssuances, interestRates, numberOfIssuances);
    });

  describe("-Create 3 Debt Agreements that belong to THE_CREDITOR", () => {
    let signedDebtOrder: SignedDebtOrder;
    let agreementId: string;
    let receipt: Web3.TransactionReceipt;

    before(async () => {
      let i: number;
      for (i = 0; i < DEBTORS.length; i++) {
        signedDebtOrder = await orderFactory.generateDebtOrder({
          creditor: THE_CREDITOR,
          debtor: DEBTORS[i],
          orderSignatories: { debtor: DEBTORS[i], creditor: THE_CREDITOR }
        });

        // The unique id used to refer to the debt agreement is the hash of its associated issuance commitment.
        agreementId = signedDebtOrder.getIssuanceCommitment().getHash();
        trancheTokens.push(new BigNumber(agreementId));
        debtAgreements.push(agreementId);

        // Creditor fills the signed debt order, creating a debt agreement with a unique associated debt token
        const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
          signedDebtOrder.getCreditor(),
          signedDebtOrder.getOrderAddresses(),
          signedDebtOrder.getOrderValues(),
          signedDebtOrder.getOrderBytes32(),
          signedDebtOrder.getSignaturesV(),
          signedDebtOrder.getSignaturesR(),
          signedDebtOrder.getSignaturesS()
        );

        receipt = await web3.eth.getTransactionReceipt(txHash);
      }
    });

    it("should set THE_CREDITOR as owner of this CDO", async () => {
      await expect(cdo.owner.callAsync()).to.eventually.equal(THE_CREDITOR);
    });

    it("should set the CDO to have 3 outstanding debts", async () => {
      await expect(
        cdo.trackOutstandingDebts.callAsync()
      ).to.eventually.bignumber.equal(3);
    });

    // 1.12 is from: 0.6 + (0.6 * 0.1) = 0.66 (Senior tranche repayment) && 0.4 + (0.4 * 0.15) = 0.46 (Mezzazine tranche repayment)
    it("should set the total repayment of the CDO to be 1.12 ether", async () => {
      await expect(
        cdo.repaymentObligation.callAsync()
      ).to.eventually.bignumber.equal(Units.ether(1.12));
    });
  });

  describe("-Transfer two Debt Agreements to the CDO", () => {
    before(async () => {
      let i: number;
      for (i = 0; i < trancheTokens.length - 1; i++) {
        await debtToken.transfer.sendTransactionAsync(
          cdo.address, // to
          trancheTokens[i], // tokenId
          { from: THE_CREDITOR }
        );
      }
    });
    describe("--Attempt to buy a share from an in-active CDO", () => {
      it("should revert the transaction", async () => {
        let priority = new BigNumber(0);

        await expect(
          cdo.purchaseShares.sendTransactionAsync(priority, {
            from: SENIOR_1,
            value: Units.ether(0.1)
          })
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });
    it("should set repayment obligation of CDO-owned debts to 2.2", async () => {
      await expect(
        cdo.debtsRepaymentObligation.callAsync()
      ).to.eventually.bignumber.equal(Units.ether(2.2));
    });

    it("should set outstanding debts to 1", async () => {
      await expect(
        cdo.trackOutstandingDebts.callAsync()
      ).to.eventually.bignumber.equal(1);
    });
  });

  describe("-Transfer the last Debt Agreement to the CDO", () => {
    before(async () => {
      await debtToken.transfer.sendTransactionAsync(
        cdo.address, // to
        trancheTokens[2], // tokenId
        { from: THE_CREDITOR }
      );
    });

    it("should set CDO as the owner of the three Debt Tokens", async () => {
      let i: number;
      for (i = 0; i < trancheTokens.length; i++) {
        await expect(
          debtToken.ownerOf.callAsync(trancheTokens[i])
        ).to.eventually.equal(cdo.address);
      }
    });

    // If someone can buy this means the CDO has been activated (the CDO's debts can pay off its promised return (if no defaults))
    it("should allow someone to buy a Senior tranche share", async () => {
      let priority = new BigNumber(0);
      let txHash = await cdo.purchaseShares.sendTransactionAsync(priority, {
        from: SENIOR_1,
        value: Units.ether(0.1)
      });

      let seniorID_1 = await cdo.getTokenID.callAsync(
        new BigNumber(0),
        new BigNumber(0)
      );

      await expect(
        trancheToken.ownerOf.callAsync(new BigNumber(seniorID_1))
      ).to.eventually.equal(SENIOR_1);
    });

    it("should let Seniors and Mezzanine buy 8 shares in total", async () => {
      let i: number;

      for (i = 1; i < SENIORS.length - 1; i++) {
        await principalToken.setBalance.sendTransactionAsync(
          SENIORS[i],
          Units.ether(100)
        );

        let txHash = await cdo.purchaseShares.sendTransactionAsync(
          new BigNumber(0),
          { from: SENIORS[i], value: Units.ether(0.1) }
        );

        let seniorID_1 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(i)
        );

        await expect(
          trancheToken.ownerOf.callAsync(new BigNumber(seniorID_1))
        ).to.eventually.equal(SENIORS[i]);
      }

      for (i = 0; i < MEZZANINES.length; i++) {
        await principalToken.setBalance.sendTransactionAsync(
          MEZZANINES[i],
          Units.ether(100)
        );

        let txHash = await cdo.purchaseShares.sendTransactionAsync(
          new BigNumber(1),
          { from: MEZZANINES[i], value: Units.ether(0.1) }
        );

        let seniorID_1 = await cdo.getTokenID.callAsync(
          new BigNumber(1),
          new BigNumber(i)
        );

        await expect(
          trancheToken.ownerOf.callAsync(new BigNumber(seniorID_1))
        ).to.eventually.equal(MEZZANINES[i]);
      }
    });

    it("should let owner of CDO to claim last un-sold share for free", async () => {
      let priority = new BigNumber(0);
      let txHash = await cdo.claimShares.sendTransactionAsync(
        new BigNumber(1),
        priority,
        { from: THE_CREDITOR }
      );

      let seniorID_1 = await cdo.getTokenID.callAsync(
        new BigNumber(0),
        new BigNumber(5)
      );

      await expect(
        trancheToken.ownerOf.callAsync(new BigNumber(seniorID_1))
      ).to.eventually.equal(THE_CREDITOR);
    });
  });

  describe("-Make a 0.3 repayment on one of the debts", () => {
    let receipt: Web3.TransactionReceipt;

    before(async () => {
      const txHash = await repaymentRouter.repay.sendTransactionAsync(
        debtAgreements[0],
        Units.ether(0.3), // amount
        principalToken.address, // token type
        { from: DEBTORS[0] }
      );

      receipt = await web3.eth.getTransactionReceipt(txHash);
    });

    it("should increase CDO balance to 0.3", async () => {
      await expect(
        principalToken.balanceOf.callAsync(cdo.address)
      ).to.eventually.bignumber.equal(Units.ether(0.3));
    });

    it("should make outstanding Senior payment equal to 0.66", async () => {
      await expect(
        cdo.getTrancheOutstanding.callAsync(new BigNumber(0))
      ).to.eventually.bignumber.equal(Units.ether(0.66));
    });

    it("should make outstanding Mezzanine payment equal to 0.46", async () => {
      await expect(
        cdo.getTrancheOutstanding.callAsync(new BigNumber(1))
      ).to.eventually.bignumber.equal(Units.ether(0.46));
    });
  });

  describe("-Try to withdraw funds", () => {

    describe("--Owner of Senior Tranche Token 1 attempts to withdraws", () => {
      let balanceBefore = new BigNumber(0);

      before(async () => {
        const seniorID_1 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(0)
        );
        const owner = await trancheToken.ownerOf.callAsync(
          new BigNumber(seniorID_1)
        ); // we know it's SENIOR_1 but to prove we can get the owner
        balanceBefore = await principalToken.balanceOf.callAsync(SENIOR_1);

        await cdo.withdraw.sendTransactionAsync(
          seniorID_1,
          owner,
          { from: owner }
        );
      });

      it("should send 0.05 of principal token to the owner", async () => {
        await expect(
          principalToken.balanceOf.callAsync(SENIOR_1)
        ).to.eventually.bignumber.equal(balanceBefore.plus(Units.ether(0.05)));
      });

      it("should decrement total Senior outstanding repayment to 0.36", async () => {
        await expect(
          cdo.getTrancheOutstanding.callAsync(new BigNumber(0))
        ).to.eventually.bignumber.equal(Units.ether(0.36));
      });
    });

    describe("--Owner of Senior Token 1 attempts to withdraws again with no balance left", () => {
      it("should revert the transaction", async () => {
        const seniorID_1 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(0)
        );
        const owner = await trancheToken.ownerOf.callAsync(
          new BigNumber(seniorID_1)
        ); // we know it's SENIOR_1

        await expect(
          cdo.withdraw.sendTransactionAsync(
            seniorID_1,
            SENIOR_1,
            { from: SENIOR_1 }
          )
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });

    describe("--Owner of Mezzanine Token 1 attempts to withdraw while Mezzanines have no balance", () => {

      it("should revert the transaction", async () => {
        const mezzanineID_1 = await cdo.getTokenID.callAsync(
          new BigNumber(1),
          new BigNumber(0)
        );

        await expect(
          cdo.withdraw.sendTransactionAsync(
            mezzanineID_1,
            MEZZANINE_1,
            { from: MEZZANINE_1 }
          )
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });

    describe("--Owner of Senior Tranche Token 2 attempts to withdraw", () => {
      it("should send 0.05 of principal token to the owner", async () => {
        const seniorID_2 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(1)
        );
        const pre_balance = await principalToken.balanceOf.callAsync(SENIOR_2);

        await cdo.withdraw.sendTransactionAsync(
          seniorID_2,
          SENIOR_2,
          { from: SENIOR_2 }
        );

        await expect(
          principalToken.balanceOf.callAsync(SENIOR_2)
        ).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.05)));
      });
    });

    after(async () => {
      it("should leave Senior Outstanding the same after the Senior withdraws, the contract balance hasn't been increased", async () => {
        await expect(
          cdo.getTrancheOutstanding.callAsync(new BigNumber(0))
        ).to.eventually.bignumber.equal(Units.ether(0.36));
      });
    });
  });

  describe("-Repay the Seniors fully so Mezzanine get balances", () => {

    describe("--Owner of Senior Tranche Token 2 attempts to withdraw", () => {
      before(async () => {
        await repaymentRouter.repay.sendTransactionAsync(
          debtAgreements[0],
          Units.ether(0.5), // amount
          principalToken.address, // token type
          { from: DEBTOR_1 }
        );
      });

      it("should send 0.06 of principal token to the owner", async () => {
        const seniorID_2 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(1)
        );
        const pre_balance = await principalToken.balanceOf.callAsync(SENIOR_2);

        await cdo.withdraw.sendTransactionAsync(
          seniorID_2,
          SENIOR_2,
          { from: SENIOR_2 }
        );

        await expect(
          principalToken.balanceOf.callAsync(SENIOR_2)
        ).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.06)));
      });
    });

    describe("--Owner of Mezzanine Tranche Token 3 attempts to withdraw", () => {
      let pre_balance = new BigNumber(0);

      before(async () => {
        const mezzanineID_3 = await cdo.getTokenID.callAsync(
          new BigNumber(1),
          new BigNumber(2)
        );
        pre_balance = await principalToken.balanceOf.callAsync(MEZZANINE_3);

        await cdo.withdraw.sendTransactionAsync(
          mezzanineID_3,
          MEZZANINE_3,
          { from: MEZZANINE_3 }
        );
      });

      it("should send 0.035 to owner", async () => {
        await expect(
          principalToken.balanceOf.callAsync(MEZZANINE_3)
        ).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.035)));
      });
    });

    describe("--Owner of Senior Tranche Token 3 attempts to withdraw for the first time", () => {
      let pre_balance = new BigNumber(0);

      before(async () => {
        const seniorID_3 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(2)
        );
        pre_balance = await principalToken.balanceOf.callAsync(SENIOR_3);

        await cdo.withdraw.sendTransactionAsync(
          seniorID_3,
          SENIOR_3,
          { from: SENIOR_3 }
        );
      });

      // Hasn't been paid yet so should get 0.11 (0.05 + 0.06 from the 2 repayment periods)
      it("should send 0.11 of principal token to the owner", async () => {
        await expect(
          principalToken.balanceOf.callAsync(SENIOR_3)
        ).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.11)));
      });
    });

    after(async () => {
      it("should make the Senior Outstanding equal to zero", async () => {
        await expect(
          cdo.getTrancheOutstanding.callAsync(new BigNumber(0))
        ).to.eventually.bignumber.equal(Units.ether(0));
      });

      it("should make the CDO balance equal to 0.495", async () => {
        await expect(
          principalToken.balanceOf.callAsync(cdo.address)
        ).to.eventually.bignumber.equal(Units.ether(0.495));
      });
    });
  });

  describe("-Try to access un-accessible things", () => {

    describe("--Owner of Senior Token 3 attempts to withdraw with no balance left", () => {

      it("should revert the transaction", async () => {
        const seniorID_3 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(2)
        );

        await expect(
          cdo.withdraw.sendTransactionAsync(
            seniorID_3,
            SENIOR_3,
            { from: SENIOR_3 }
          )
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });

    describe("--Someone tries to buy a share when no shares are left", () => {
      it("should revert the transaction", async () => {
        await expect(
          cdo.purchaseShares.sendTransactionAsync(new BigNumber(0), {
            from: SENIOR_6,
            value: Units.ether(0.1)
          })
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });

    describe("--Someone tries to withdraw with a Tranche Token they don't own", () => {

      it("should revert the transaction", async () => {
        const seniorID_4 = await cdo.getTokenID.callAsync(
          new BigNumber(0),
          new BigNumber(3)
        );

        await expect(
          cdo.withdraw.sendTransactionAsync(
            seniorID_4,
            SENIOR_3,
            { from: SENIOR_3 }
          )
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });

    describe("--Non-owner tries to call an onlyOwner function", () => {
      it("should revert the transaction", async () => {
        await expect(
          cdo.setTrancheTokenContract.sendTransactionAsync(
            contractRegistry.address,
            { from: SENIOR_1 }
          )
        ).to.eventually.be.rejectedWith(REVERT_ERROR);
      });
    });
  });

  describe("-Owner tries to call an onlyOwner function", () => {
    it("should allow the transaction", async () => {
      const own = await cdo.owner.callAsync();

      await expect(
        cdo.setTrancheTokenContract.sendTransactionAsync(
          contractRegistry.address,
          { from: THE_CREDITOR }
        )
      ).to.eventually.not.be.equal(REVERT_ERROR);
    });
  });
  });
});
