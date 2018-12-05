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
const promisify = require("tiny-promisify");
class Web3Utils {
    constructor(web3) {
        this.web3 = web3;
    }
    doesContractExistAtAddressAsync(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield promisify(this.web3.eth.getCode)(address);
            // Regex matches 0x0, 0x00, 0x in order to accommodate poorly implemented clients
            const codeIsEmpty = /^0x0{0,40}$/i.test(code);
            return !codeIsEmpty;
        });
    }
    /**
     * Returns the latest blocktime in seconds.
     *
     * @returns {Promise<number>}
     */
    getLatestBlockTime() {
        return __awaiter(this, void 0, void 0, function* () {
            // Ganache has a bug in which, if ....
            //   1. `evm_increaseTime` has been used at some point in the chain's history
            //   2. `evm_revert` has *just* been used to revert to a previous snapshot
            //   3. A block has not yet been mined
            // ...the timestamp returned by `web3.eth.getBlock("latest")`
            // will not account for the time differential applied by `evm_increaseTime`.
            //
            // We force a block to mine in order to avoid the edge case issues
            // that this bug engenders.
            yield this.mineBlock();
            const latestBlock = yield promisify(this.web3.eth.getBlock)("latest");
            return latestBlock.timestamp;
        });
    }
    /**
     * Increases block time by the given number of seconds. Returns true
     * if the next block was mined successfully after increasing time.
     *
     * @param {number} seconds
     * @returns {Promise<boolean>}
     */
    increaseTime(seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            const increaseTimeResponse = yield this.sendJsonRpcRequestAsync("evm_increaseTime", [
                seconds,
            ]);
            // A new block must be mined to make this effective.
            const blockMineResponse = yield this.mineBlock();
            return !increaseTimeResponse["error"] && !blockMineResponse["error"];
        });
    }
    /**
     * Mines a single block.
     *
     * @returns {Promise<"web3".Web3.JSONRPCResponsePayload>}
     */
    mineBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendJsonRpcRequestAsync("evm_mine", []);
        });
    }
    sendJsonRpcRequestAsync(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return promisify(this.web3.currentProvider.sendAsync, {
                context: this.web3.currentProvider,
            })({
                jsonrpc: "2.0",
                method,
                params,
                id: new Date().getTime(),
            });
        });
    }
}
exports.Web3Utils = Web3Utils;
//# sourceMappingURL=web3_utils.js.map