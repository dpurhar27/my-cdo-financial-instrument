"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
exports.classUtils = {
    // This is useful for classes that have nested methods. Nested methods don't get bound out of the box.
    bindAll(self, exclude = ["contructor"], thisArg) {
        for (const key of Object.getOwnPropertyNames(self)) {
            const val = self[key];
            if (!_.includes(exclude, key)) {
                if (_.isFunction(val)) {
                    self[key] = val.bind(thisArg || self);
                }
                else if (_.isObject(val)) {
                    exports.classUtils.bindAll(val, exclude, self);
                }
            }
        }
        return self;
    }
};
var SolidityType;
(function (SolidityType) {
    SolidityType["address"] = "address";
    SolidityType["uint256"] = "uint256";
    SolidityType["uint8"] = "uint8";
    SolidityType["uint"] = "uint";
    SolidityType["bytes32"] = "bytes32";
    SolidityType["boolean"] = "bool";
    SolidityType["string"] = "string";
})(SolidityType = exports.SolidityType || (exports.SolidityType = {}));
//# sourceMappingURL=common.js.map