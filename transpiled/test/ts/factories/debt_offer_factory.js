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
const _ = require("lodash");
const debt_offer_1 = require("../../../types/proxy/debt_offer");
class DebtOfferFactory {
    constructor(defaultParams) {
        this.defaultParams = defaultParams;
    }
    generateDebtOffer(modifications = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = _.clone(this.defaultParams);
            Object.assign(params, modifications);
            if (!params.salt) {
                params.salt = new bignumber_js_1.default(Math.random()
                    .toString()
                    .substring(2));
            }
            const debtOffer = new debt_offer_1.DebtOffer({
                kernelVersion: params.kernelVersion,
                creditor: params.creditor,
                repaymentRouterVersion: params.repaymentRouterVersion,
                debtor: params.debtor,
                underwriter: params.underwriter,
                termsContract: params.termsContract,
                principalToken: params.principalToken,
                relayer: params.relayer,
                underwriterRiskRating: params.underwriterRiskRating,
                salt: params.salt,
                principalAmount: params.principalAmount,
                underwriterFee: params.underwriterFee,
                relayerFee: params.relayerFee,
                creditorFee: params.creditorFee,
                debtorFee: params.debtorFee,
                expirationTimestampInSec: params.expirationTimestampInSec,
                termsContractParameters: params.termsContractParameters
            });
            return debtOffer.getSignedDebtOffer(web3, params.offerSignatories);
        });
    }
}
exports.DebtOfferFactory = DebtOfferFactory;
//# sourceMappingURL=debt_offer_factory.js.map