"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const INTEREST_RATE_SCALING_FACTOR = new bignumber_js_1.BigNumber(Math.pow(10, 4));
const UNDERWRITER_RISK_RATING_SCALING_FACTOR = new bignumber_js_1.BigNumber(Math.pow(10, 7));
function ether(amount) {
    const weiString = web3.toWei(amount, "ether");
    return new bignumber_js_1.BigNumber(weiString);
}
exports.ether = ether;
function interestRateFixedPoint(amount) {
    return new bignumber_js_1.BigNumber(amount).times(INTEREST_RATE_SCALING_FACTOR);
}
exports.interestRateFixedPoint = interestRateFixedPoint;
function underwriterRiskRatingFixedPoint(riskRating) {
    return new bignumber_js_1.BigNumber(riskRating).times(UNDERWRITER_RISK_RATING_SCALING_FACTOR);
}
exports.underwriterRiskRatingFixedPoint = underwriterRiskRatingFixedPoint;
//# sourceMappingURL=units.js.map