"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
class TermsContractParameters {
    static bitShiftLeft(target, numPlaces) {
        const binaryTargetString = target.toString(2);
        const binaryTargetStringShifted = binaryTargetString + "0".repeat(numPlaces);
        return new bignumber_js_1.BigNumber(binaryTargetStringShifted, 2);
    }
}
class SimpleInterestParameters extends TermsContractParameters {
    static pack(terms) {
        const principalTokenIndexShifted = TermsContractParameters.bitShiftLeft(terms.principalTokenIndex, 248);
        const principalAmountShifted = TermsContractParameters.bitShiftLeft(terms.principalAmount, 152);
        const interestRateShifted = TermsContractParameters.bitShiftLeft(terms.interestRateFixedPoint, 128);
        const amortizationUnitTypeShifted = TermsContractParameters.bitShiftLeft(terms.amortizationUnitType, 124);
        const termLengthShifted = TermsContractParameters.bitShiftLeft(terms.termLengthUnits, 108);
        const baseTenParameters = principalTokenIndexShifted
            .plus(principalAmountShifted)
            .plus(interestRateShifted)
            .plus(amortizationUnitTypeShifted)
            .plus(termLengthShifted);
        return `0x${baseTenParameters.toString(16).padStart(64, "0")}`;
    }
}
exports.SimpleInterestParameters = SimpleInterestParameters;
class CollateralizedSimpleInterestTermsParameters extends TermsContractParameters {
    static pack(collateralTerms, 
    // Optionally, get the full contract terms parameters string by providing the contract terms.
    contractTerms) {
        const encodedCollateralToken = collateralTerms.collateralTokenIndex
            .toString(16)
            .padStart(2, "0");
        const encodedCollateralAmount = collateralTerms.collateralAmount
            .toString(16)
            .padStart(23, "0");
        const encodedGracePeriodInDays = collateralTerms.gracePeriodInDays
            .toString(16)
            .padStart(2, "0");
        const packedCollateralParameters = encodedCollateralToken +
            encodedCollateralAmount +
            encodedGracePeriodInDays;
        if (contractTerms) {
            const packedTermsParameters = SimpleInterestParameters.pack(contractTerms);
            return `${packedTermsParameters.substr(0, 39)}${packedCollateralParameters.padStart(27, "0")}`;
        }
        else {
            return `0x${packedCollateralParameters.padStart(64, "0")}`;
        }
    }
}
exports.CollateralizedSimpleInterestTermsParameters = CollateralizedSimpleInterestTermsParameters;
class ERC721CollateralizedSimpleInterestTermsParameters extends TermsContractParameters {
    static pack(collateralTerms, 
    // Optionally, get the full contract terms parameters string by providing the contract terms.
    contractTerms) {
        const encodedIsEnumerable = collateralTerms.isEnumerable.toString(16);
        const encodedCollateralToken = collateralTerms.erc721ContractIndex
            .toString(16)
            .padStart(12, "0");
        const encodedTokenIndex = collateralTerms.tokenReference
            .toString(16)
            .padStart(14, "0");
        const packedCollateralParameters = encodedCollateralToken + encodedTokenIndex + encodedIsEnumerable;
        if (contractTerms) {
            const packedTermsParameters = SimpleInterestParameters.pack(contractTerms);
            return `${packedTermsParameters.substr(0, 39)}${packedCollateralParameters.padStart(27, "0")}`;
        }
        else {
            return `0x${packedCollateralParameters.padStart(64, "0")}`;
        }
    }
}
exports.ERC721CollateralizedSimpleInterestTermsParameters = ERC721CollateralizedSimpleInterestTermsParameters;
//# sourceMappingURL=terms_contract_parameters.js.map