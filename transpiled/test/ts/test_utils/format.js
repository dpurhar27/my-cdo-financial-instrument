"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// External Libraries
const bignumber_js_1 = require("bignumber.js");
// Types
const constants_1 = require("./constants");
exports.isBigNumber = (object) => {
    return (object.isBigNumber ||
        object instanceof bignumber_js_1.BigNumber ||
        (object.constructor && object.constructor.name === "BigNumber"));
};
/**
 * Returns true if the given address string matches the format of an Ethereum address,
 * and is not the null address (I.E. 0x0000000000000000000000000000000000000000).
 *
 * @param {string} address
 * @returns {boolean}
 */
exports.isNonNullAddress = (address) => {
    const addressRegex = new RegExp("^0x[a-fA-F0-9]{40}$");
    return address.match(addressRegex) && address !== constants_1.NULL_ADDRESS;
};
//# sourceMappingURL=format.js.map