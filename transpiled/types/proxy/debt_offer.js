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
const ethUtil = require("ethereumjs-util");
const solidity = require("../../utils/solidity");
const signable_message_1 = require("../kernel/signable_message");
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };
class DebtOffer extends signable_message_1.SignableMessage {
    constructor(params) {
        super();
        this.params = params;
    }
    getKernelVersion() {
        return this.params.kernelVersion;
    }
    getCreditor() {
        return this.params.creditor;
    }
    getRepaymentRouterVersion() {
        return this.params.repaymentRouterVersion;
    }
    getDebtor() {
        return this.params.debtor;
    }
    getUnderwriter() {
        return this.params.underwriter;
    }
    getTermsContract() {
        return this.params.termsContract;
    }
    getPrincipalToken() {
        return this.params.principalToken;
    }
    getRelayer() {
        return this.params.relayer;
    }
    getUnderwriterRiskRating() {
        return this.params.underwriterRiskRating;
    }
    getSalt() {
        return this.params.salt;
    }
    getPrincipalAmount() {
        return this.params.principalAmount;
    }
    getUnderwriterFee() {
        return this.params.underwriterFee;
    }
    getRelayerFee() {
        return this.params.relayerFee;
    }
    getCreditorFee() {
        return this.params.creditorFee;
    }
    getDebtorFee() {
        return this.params.debtorFee;
    }
    getExpiration() {
        return this.params.expirationTimestampInSec;
    }
    getTermsContractParameters() {
        return this.params.termsContractParameters;
    }
    getCreditorCommitmentHash() {
        const hash = solidity.SHA3([
            this.getCreditor(),
            this.getKernelVersion(),
            this.getRepaymentRouterVersion(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getCreditorFee(),
            this.getExpiration(),
            this.getTermsContractParameters()
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    getAgreementId() {
        const hash = solidity.SHA3([
            this.getRepaymentRouterVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getUnderwriterRiskRating(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
            this.getSalt()
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    getUnderwriterCommitmentHash() {
        const hash = solidity.SHA3([
            this.getKernelVersion(),
            this.getAgreementId(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalToken(),
            this.getExpiration()
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    getDebtOrderHash() {
        const hash = solidity.SHA3([
            this.getKernelVersion(),
            this.getAgreementId(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalToken(),
            this.getDebtorFee(),
            this.getCreditorFee(),
            this.getRelayer(),
            this.getRelayerFee(),
            this.getExpiration()
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
    getHash() {
        return this.getCreditorCommitmentHash();
    }
    getSignedDebtOffer(web3, signatories) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditorSignature = signatories.creditor
                ? yield this.getSignature(web3, signatories.creditor, this.getCreditorCommitmentHash())
                : NULL_SIGNATURE;
            const debtorSignature = signatories.debtor
                ? yield this.getSignature(web3, signatories.debtor, this.getDebtOrderHash())
                : NULL_SIGNATURE;
            const underwriterSignature = signatories.underwriter
                ? yield this.getSignature(web3, signatories.underwriter, this.getUnderwriterCommitmentHash())
                : NULL_SIGNATURE;
            return new SignedDebtOffer(this, creditorSignature, debtorSignature, underwriterSignature);
        });
    }
}
exports.DebtOffer = DebtOffer;
class SignedDebtOffer extends DebtOffer {
    constructor(debtOffer, creditorSignature, debtorSignature, underwriterSignature) {
        super(debtOffer.params);
        this.creditorSignature = creditorSignature;
        this.debtorSignature = debtorSignature;
        this.underwriterSignature = underwriterSignature;
    }
    getCreditorSignature() {
        return this.creditorSignature;
    }
    getDebtorSignature() {
        return this.debtorSignature;
    }
    getUnderwriterSignature() {
        return this.underwriterSignature;
    }
    getOrderAddresses() {
        return [
            this.getRepaymentRouterVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getRelayer()
        ];
    }
    getOrderValues() {
        return [
            this.getUnderwriterRiskRating(),
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getExpiration()
        ];
    }
    getOrderBytes32() {
        return [this.getTermsContractParameters()];
    }
    getCommitmentAddresses() {
        return [
            this.getCreditor(),
            this.getKernelVersion(),
            this.getRepaymentRouterVersion(),
            this.getTermsContract(),
            this.getPrincipalToken()
        ];
    }
    getCommitmentValues() {
        return [
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getCreditorFee(),
            this.getExpiration()
        ];
    }
    getCommitmentBytes32() {
        return [this.getTermsContractParameters()];
    }
    getSignaturesR() {
        return [
            this.debtorSignature.r,
            this.creditorSignature.r,
            this.underwriterSignature.r
        ];
    }
    getSignaturesS() {
        return [
            this.debtorSignature.s,
            this.creditorSignature.s,
            this.underwriterSignature.s
        ];
    }
    getSignaturesV() {
        return [
            this.debtorSignature.v,
            this.creditorSignature.v,
            this.underwriterSignature.v
        ];
    }
}
exports.SignedDebtOffer = SignedDebtOffer;
//# sourceMappingURL=debt_offer.js.map