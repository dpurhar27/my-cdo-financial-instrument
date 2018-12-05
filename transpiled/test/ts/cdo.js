"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const ABIDecoder = require("abi-decoder");
const chai = require("chai");
const moment = require("moment");
const Units = require("./test_utils/units");
const debt_kernel_1 = require("../../types/generated/debt_kernel");
const debt_registry_1 = require("../../types/generated/debt_registry");
const debt_token_1 = require("../../types/generated/debt_token");
const dummy_token_1 = require("../../types/generated/dummy_token");
const token_registry_1 = require("../../types/generated/token_registry");
const repayment_router_1 = require("../../types/generated/repayment_router");
const simple_interest_terms_contract_1 = require("../../types/generated/simple_interest_terms_contract");
const token_transfer_proxy_1 = require("../../types/generated/token_transfer_proxy");
const contract_registry_1 = require("../../types/generated/contract_registry");
const cdo_1 = require("../../types/generated/cdo");
const c_d_o_lib_1 = require("../../types/generated/c_d_o_lib");
const tranche_token_1 = require("../../types/generated/tranche_token");
const bignumber_setup_1 = require("./test_utils/bignumber_setup");
const chai_setup_1 = require("./test_utils/chai_setup");
const constants_1 = require("./test_utils/constants");
const terms_contract_parameters_1 = require("./factories/terms_contract_parameters");
const debt_order_factory_1 = require("./factories/debt_order_factory");
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
// Artifacts
const cdoCon = artifacts.require("CDO");
contract("Collateralized Debt Obligation", (ACCOUNTS) => __awaiter(this, void 0, void 0, function* () {
    let repaymentRouter;
    let kernel;
    let debtToken;
    let principalToken;
    let termsContract;
    let tokenTransferProxy;
    let debtRegistry;
    let contractRegistry;
    let cdo;
    let cdoLib;
    let trancheToken;
    let trancheRegistry;
    let orderFactory;
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
    let creditorBalance;
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    const CDO_CREATOR = { from: THE_CREDITOR, gas: 4000000 };
    let trancheTokens = new Array();
    let debtAgreements = new Array();
    before(() => __awaiter(this, void 0, void 0, function* () {
        const dummyTokenRegistryContract = yield token_registry_1.TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = yield dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync("REP");
        const dummyREPTokenIndex = yield dummyTokenRegistryContract.getTokenIndexBySymbol.callAsync("REP");
        principalToken = yield dummy_token_1.DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);
        kernel = yield debt_kernel_1.DebtKernelContract.deployed(web3, TX_DEFAULTS);
        debtToken = yield debt_token_1.DebtTokenContract.deployed(web3, TX_DEFAULTS);
        cdoLib = yield c_d_o_lib_1.CDOLibContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = yield token_transfer_proxy_1.TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        termsContract = yield simple_interest_terms_contract_1.SimpleInterestTermsContractContract.deployed(web3, TX_DEFAULTS);
        debtRegistry = yield debt_registry_1.DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        contractRegistry = yield contract_registry_1.ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = yield repayment_router_1.RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        trancheToken = yield tranche_token_1.TrancheTokenContract.deployed(web3, TX_DEFAULTS);
        // Add the library contract into the bytecode of the CDO.sol before deploying
        cdoCon.bytecode = cdoCon.bytecode.replace(/_+CDOLib_+/g, cdoLib.address.replace("0x", ""));
        /*** Set actors in this scenario with sufficient balances ***/
        yield principalToken.setBalance.sendTransactionAsync(THE_CREDITOR, Units.ether(100));
        yield principalToken.setBalance.sendTransactionAsync(SENIOR_1, Units.ether(100));
        /*** Set actors in this scenario with approval to move balances ***/
        yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(100), { from: DEBTOR_1 });
        yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(100), { from: DEBTOR_2 });
        yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(100), { from: DEBTOR_3 });
        yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(100), { from: THE_CREDITOR });
        const termsContractParameters = terms_contract_parameters_1.SimpleInterestParameters.pack({
            principalTokenIndex: dummyREPTokenIndex,
            principalAmount: Units.ether(1),
            interestRateFixedPoint: Units.interestRateFixedPoint(10),
            amortizationUnitType: new bignumber_js_1.BigNumber(1),
            termLengthUnits: new bignumber_js_1.BigNumber(1) // Term length in amortization units.
        });
        // The default debt agreement, each param can be modified individually
        const defaultOrderParams = {
            creditorFee: Units.ether(0),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtToken.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0),
            expirationTimestampInSec: new bignumber_js_1.BigNumber(moment()
                .add(1, "days")
                .unix()),
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
        orderFactory = new debt_order_factory_1.DebtOrderFactory(defaultOrderParams);
        ABIDecoder.addABI(repaymentRouter.abi);
    }));
    after(() => {
        ABIDecoder.removeABI(repaymentRouter.abi);
    });
    const createCDOContract = ((principal, _debts, _totalIssuances, interestRates, numberOfIssuances) => __awaiter(this, void 0, void 0, function* () {
        let debts = new bignumber_js_1.BigNumber(_debts);
        let totalIssuances = new bignumber_js_1.BigNumber(_totalIssuances);
        // Create a CDO with desired parameters
        const cdoContractTruffle = yield cdoCon.new(contractRegistry.address, principalToken.address, trancheToken.address, interestRates, numberOfIssuances, Units.ether(principal), // Total value of this CDO (principal)
        debts, totalIssuances, { from: THE_CREDITOR });
        const cdoContractWeb3 = web3.eth
            .contract(cdoCon.abi)
            .at(cdoContractTruffle.address);
        cdo = new cdo_1.CDOContract(cdoContractWeb3, CDO_CREATOR);
    }));
    describe("#Create a CDO where underlying debts can't repay promised amount", () => {
        before(() => __awaiter(this, void 0, void 0, function* () {
            let principal = 10;
            let debts = 1;
            let totalIssuances = 20;
            let interestRates = [10, 20]; // Seniors interest rate is 10%, Mezzanines is 20%
            let numberOfIssuances = [10, 10]; // Seniors # of shares is 10, Mezzanines is 10
            yield createCDOContract(principal, debts, totalIssuances, interestRates, numberOfIssuances);
        }));
        describe("-Create and send the debt to the invalid CDO", () => {
            let agreementId;
            before(() => __awaiter(this, void 0, void 0, function* () {
                let signedDebtOrder;
                let receipt;
                signedDebtOrder = yield orderFactory.generateDebtOrder({
                    creditor: THE_CREDITOR,
                    debtor: DEBTOR_3,
                    orderSignatories: { debtor: DEBTOR_3, creditor: THE_CREDITOR }
                });
                // The unique id used to refer to the debt agreement is the hash of its associated issuance commitment.
                agreementId = signedDebtOrder.getIssuanceCommitment().getHash();
                //trancheTokens.push(new BigNumber(agreementId));
                //debtAgreements.push(agreementId);
                // Creditor fills the signed debt order, creating a debt agreement with a unique associated debt token
                const txHash = yield kernel.fillDebtOrder.sendTransactionAsync(signedDebtOrder.getCreditor(), signedDebtOrder.getOrderAddresses(), signedDebtOrder.getOrderValues(), signedDebtOrder.getOrderBytes32(), signedDebtOrder.getSignaturesV(), signedDebtOrder.getSignaturesR(), signedDebtOrder.getSignaturesS());
                receipt = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                let tokenId = new bignumber_js_1.BigNumber(agreementId);
                yield expect(debtToken.transfer.sendTransactionAsync(cdo.address, // to
                tokenId, // tokenId
                { from: THE_CREDITOR })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
    });
    describe("#Create a valid CDO that has Senior and Mezzanine Tranches", () => {
        before(() => __awaiter(this, void 0, void 0, function* () {
            let principal = 1;
            let debts = 3;
            let totalIssuances = 10;
            let interestRates = [10, 15]; // Seniors interest rate is 10%, Mezzanines is 15%
            let numberOfIssuances = [6, 4]; // Seniors # of shares is 6, Mezzanines is 4
            yield createCDOContract(principal, debts, totalIssuances, interestRates, numberOfIssuances);
        }));
        describe("-Create 3 Debt Agreements that belong to THE_CREDITOR", () => {
            let signedDebtOrder;
            let agreementId;
            let receipt;
            before(() => __awaiter(this, void 0, void 0, function* () {
                let i;
                for (i = 0; i < DEBTORS.length; i++) {
                    signedDebtOrder = yield orderFactory.generateDebtOrder({
                        creditor: THE_CREDITOR,
                        debtor: DEBTORS[i],
                        orderSignatories: { debtor: DEBTORS[i], creditor: THE_CREDITOR }
                    });
                    // The unique id used to refer to the debt agreement is the hash of its associated issuance commitment.
                    agreementId = signedDebtOrder.getIssuanceCommitment().getHash();
                    trancheTokens.push(new bignumber_js_1.BigNumber(agreementId));
                    debtAgreements.push(agreementId);
                    // Creditor fills the signed debt order, creating a debt agreement with a unique associated debt token
                    const txHash = yield kernel.fillDebtOrder.sendTransactionAsync(signedDebtOrder.getCreditor(), signedDebtOrder.getOrderAddresses(), signedDebtOrder.getOrderValues(), signedDebtOrder.getOrderBytes32(), signedDebtOrder.getSignaturesV(), signedDebtOrder.getSignaturesR(), signedDebtOrder.getSignaturesS());
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                }
            }));
            it("should set THE_CREDITOR as owner of this CDO", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.owner.callAsync()).to.eventually.equal(THE_CREDITOR);
            }));
            it("should set the CDO to have 3 outstanding debts", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.trackOutstandingDebts.callAsync()).to.eventually.bignumber.equal(3);
            }));
            // 1.12 is from: 0.6 + (0.6 * 0.1) = 0.66 (Senior tranche repayment) && 0.4 + (0.4 * 0.15) = 0.46 (Mezzazine tranche repayment)
            it("should set the total repayment of the CDO to be 1.12 ether", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.repaymentObligation.callAsync()).to.eventually.bignumber.equal(Units.ether(1.12));
            }));
        });
        describe("-Transfer two Debt Agreements to the CDO", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                let i;
                for (i = 0; i < trancheTokens.length - 1; i++) {
                    yield debtToken.transfer.sendTransactionAsync(cdo.address, // to
                    trancheTokens[i], // tokenId
                    { from: THE_CREDITOR });
                }
            }));
            describe("--Attempt to buy a share from an in-active CDO", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    let priority = new bignumber_js_1.BigNumber(0);
                    yield expect(cdo.purchaseShares.sendTransactionAsync(priority, {
                        from: SENIOR_1,
                        value: Units.ether(0.1)
                    })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            it("should set repayment obligation of CDO-owned debts to 2.2", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.debtsRepaymentObligation.callAsync()).to.eventually.bignumber.equal(Units.ether(2.2));
            }));
            it("should set outstanding debts to 1", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.trackOutstandingDebts.callAsync()).to.eventually.bignumber.equal(1);
            }));
        });
        describe("-Transfer the last Debt Agreement to the CDO", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield debtToken.transfer.sendTransactionAsync(cdo.address, // to
                trancheTokens[2], // tokenId
                { from: THE_CREDITOR });
            }));
            it("should set CDO as the owner of the three Debt Tokens", () => __awaiter(this, void 0, void 0, function* () {
                let i;
                for (i = 0; i < trancheTokens.length; i++) {
                    yield expect(debtToken.ownerOf.callAsync(trancheTokens[i])).to.eventually.equal(cdo.address);
                }
            }));
            // If someone can buy this means the CDO has been activated (the CDO's debts can pay off its promised return (if no defaults))
            it("should allow someone to buy a Senior tranche share", () => __awaiter(this, void 0, void 0, function* () {
                let priority = new bignumber_js_1.BigNumber(0);
                let txHash = yield cdo.purchaseShares.sendTransactionAsync(priority, {
                    from: SENIOR_1,
                    value: Units.ether(0.1)
                });
                let seniorID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(0));
                yield expect(trancheToken.ownerOf.callAsync(new bignumber_js_1.BigNumber(seniorID_1))).to.eventually.equal(SENIOR_1);
            }));
            it("should let Seniors and Mezzanine buy 8 shares in total", () => __awaiter(this, void 0, void 0, function* () {
                let i;
                for (i = 1; i < SENIORS.length - 1; i++) {
                    yield principalToken.setBalance.sendTransactionAsync(SENIORS[i], Units.ether(100));
                    let txHash = yield cdo.purchaseShares.sendTransactionAsync(new bignumber_js_1.BigNumber(0), { from: SENIORS[i], value: Units.ether(0.1) });
                    let seniorID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(i));
                    yield expect(trancheToken.ownerOf.callAsync(new bignumber_js_1.BigNumber(seniorID_1))).to.eventually.equal(SENIORS[i]);
                }
                for (i = 0; i < MEZZANINES.length; i++) {
                    yield principalToken.setBalance.sendTransactionAsync(MEZZANINES[i], Units.ether(100));
                    let txHash = yield cdo.purchaseShares.sendTransactionAsync(new bignumber_js_1.BigNumber(1), { from: MEZZANINES[i], value: Units.ether(0.1) });
                    let seniorID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(1), new bignumber_js_1.BigNumber(i));
                    yield expect(trancheToken.ownerOf.callAsync(new bignumber_js_1.BigNumber(seniorID_1))).to.eventually.equal(MEZZANINES[i]);
                }
            }));
            it("should let owner of CDO to claim last un-sold share for free", () => __awaiter(this, void 0, void 0, function* () {
                let priority = new bignumber_js_1.BigNumber(0);
                let txHash = yield cdo.claimShares.sendTransactionAsync(new bignumber_js_1.BigNumber(1), priority, { from: THE_CREDITOR });
                let seniorID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(5));
                yield expect(trancheToken.ownerOf.callAsync(new bignumber_js_1.BigNumber(seniorID_1))).to.eventually.equal(THE_CREDITOR);
            }));
        });
        describe("-Make a 0.3 repayment on one of the debts", () => {
            let receipt;
            before(() => __awaiter(this, void 0, void 0, function* () {
                const txHash = yield repaymentRouter.repay.sendTransactionAsync(debtAgreements[0], Units.ether(0.3), // amount
                principalToken.address, // token type
                { from: DEBTORS[0] });
                receipt = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should increase CDO balance to 0.3", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(principalToken.balanceOf.callAsync(cdo.address)).to.eventually.bignumber.equal(Units.ether(0.3));
            }));
            it("should make outstanding Senior payment equal to 0.66", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.getTrancheOutstanding.callAsync(new bignumber_js_1.BigNumber(0))).to.eventually.bignumber.equal(Units.ether(0.66));
            }));
            it("should make outstanding Mezzanine payment equal to 0.46", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(cdo.getTrancheOutstanding.callAsync(new bignumber_js_1.BigNumber(1))).to.eventually.bignumber.equal(Units.ether(0.46));
            }));
        });
        describe("-Try to withdraw funds", () => {
            describe("--Owner of Senior Tranche Token 1 attempts to withdraws", () => {
                let balanceBefore = new bignumber_js_1.BigNumber(0);
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(0));
                    const owner = yield trancheToken.ownerOf.callAsync(new bignumber_js_1.BigNumber(seniorID_1)); // we know it's SENIOR_1 but to prove we can get the owner
                    balanceBefore = yield principalToken.balanceOf.callAsync(SENIOR_1);
                    yield cdo.withdraw.sendTransactionAsync(seniorID_1, owner, { from: owner });
                }));
                it("should send 0.05 of principal token to the owner", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(SENIOR_1)).to.eventually.bignumber.equal(balanceBefore.plus(Units.ether(0.05)));
                }));
                it("should decrement total Senior outstanding repayment to 0.36", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(cdo.getTrancheOutstanding.callAsync(new bignumber_js_1.BigNumber(0))).to.eventually.bignumber.equal(Units.ether(0.36));
                }));
            });
            describe("--Owner of Senior Token 1 attempts to withdraws again with no balance left", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(0));
                    const owner = yield trancheToken.ownerOf.callAsync(new bignumber_js_1.BigNumber(seniorID_1)); // we know it's SENIOR_1
                    yield expect(cdo.withdraw.sendTransactionAsync(seniorID_1, SENIOR_1, { from: SENIOR_1 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("--Owner of Mezzanine Token 1 attempts to withdraw while Mezzanines have no balance", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    const mezzanineID_1 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(1), new bignumber_js_1.BigNumber(0));
                    yield expect(cdo.withdraw.sendTransactionAsync(mezzanineID_1, MEZZANINE_1, { from: MEZZANINE_1 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("--Owner of Senior Tranche Token 2 attempts to withdraw", () => {
                it("should send 0.05 of principal token to the owner", () => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_2 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(1));
                    const pre_balance = yield principalToken.balanceOf.callAsync(SENIOR_2);
                    yield cdo.withdraw.sendTransactionAsync(seniorID_2, SENIOR_2, { from: SENIOR_2 });
                    yield expect(principalToken.balanceOf.callAsync(SENIOR_2)).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.05)));
                }));
            });
            after(() => __awaiter(this, void 0, void 0, function* () {
                it("should leave Senior Outstanding the same after the Senior withdraws, the contract balance hasn't been increased", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(cdo.getTrancheOutstanding.callAsync(new bignumber_js_1.BigNumber(0))).to.eventually.bignumber.equal(Units.ether(0.36));
                }));
            }));
        });
        describe("-Repay the Seniors fully so Mezzanine get balances", () => {
            describe("--Owner of Senior Tranche Token 2 attempts to withdraw", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield repaymentRouter.repay.sendTransactionAsync(debtAgreements[0], Units.ether(0.5), // amount
                    principalToken.address, // token type
                    { from: DEBTOR_1 });
                }));
                it("should send 0.06 of principal token to the owner", () => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_2 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(1));
                    const pre_balance = yield principalToken.balanceOf.callAsync(SENIOR_2);
                    yield cdo.withdraw.sendTransactionAsync(seniorID_2, SENIOR_2, { from: SENIOR_2 });
                    yield expect(principalToken.balanceOf.callAsync(SENIOR_2)).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.06)));
                }));
            });
            describe("--Owner of Mezzanine Tranche Token 3 attempts to withdraw", () => {
                let pre_balance = new bignumber_js_1.BigNumber(0);
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const mezzanineID_3 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(1), new bignumber_js_1.BigNumber(2));
                    pre_balance = yield principalToken.balanceOf.callAsync(MEZZANINE_3);
                    yield cdo.withdraw.sendTransactionAsync(mezzanineID_3, MEZZANINE_3, { from: MEZZANINE_3 });
                }));
                it("should send 0.035 to owner", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(MEZZANINE_3)).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.035)));
                }));
            });
            describe("--Owner of Senior Tranche Token 3 attempts to withdraw for the first time", () => {
                let pre_balance = new bignumber_js_1.BigNumber(0);
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_3 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(2));
                    pre_balance = yield principalToken.balanceOf.callAsync(SENIOR_3);
                    yield cdo.withdraw.sendTransactionAsync(seniorID_3, SENIOR_3, { from: SENIOR_3 });
                }));
                // Hasn't been paid yet so should get 0.11 (0.05 + 0.06 from the 2 repayment periods)
                it("should send 0.11 of principal token to the owner", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(SENIOR_3)).to.eventually.bignumber.equal(pre_balance.plus(Units.ether(0.11)));
                }));
            });
            after(() => __awaiter(this, void 0, void 0, function* () {
                it("should make the Senior Outstanding equal to zero", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(cdo.getTrancheOutstanding.callAsync(new bignumber_js_1.BigNumber(0))).to.eventually.bignumber.equal(Units.ether(0));
                }));
                it("should make the CDO balance equal to 0.495", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(cdo.address)).to.eventually.bignumber.equal(Units.ether(0.495));
                }));
            }));
        });
        describe("-Try to access un-accessible things", () => {
            describe("--Owner of Senior Token 3 attempts to withdraw with no balance left", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_3 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(2));
                    yield expect(cdo.withdraw.sendTransactionAsync(seniorID_3, SENIOR_3, { from: SENIOR_3 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("--Someone tries to buy a share when no shares are left", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(cdo.purchaseShares.sendTransactionAsync(new bignumber_js_1.BigNumber(0), {
                        from: SENIOR_6,
                        value: Units.ether(0.1)
                    })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("--Someone tries to withdraw with a Tranche Token they don't own", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    const seniorID_4 = yield cdo.getTokenID.callAsync(new bignumber_js_1.BigNumber(0), new bignumber_js_1.BigNumber(3));
                    yield expect(cdo.withdraw.sendTransactionAsync(seniorID_4, SENIOR_3, { from: SENIOR_3 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("--Non-owner tries to call an onlyOwner function", () => {
                it("should revert the transaction", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(cdo.setTrancheTokenContract.sendTransactionAsync(contractRegistry.address, { from: SENIOR_1 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
        });
        describe("-Owner tries to call an onlyOwner function", () => {
            it("should allow the transaction", () => __awaiter(this, void 0, void 0, function* () {
                const own = yield cdo.owner.callAsync();
                yield expect(cdo.setTrancheTokenContract.sendTransactionAsync(contractRegistry.address, { from: THE_CREDITOR })).to.eventually.not.be.equal(constants_1.REVERT_ERROR);
            }));
        });
    });
}));
//# sourceMappingURL=cdo.js.map