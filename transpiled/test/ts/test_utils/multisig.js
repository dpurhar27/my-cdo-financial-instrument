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
// External Libraries
const bignumber_js_1 = require("bignumber.js");
const ABIDecoder = require("abi-decoder");
// Utils
const web3_utils_1 = require("../../../utils/web3_utils");
const migration_constants_1 = require("../../../migrations/migration_constants");
/**
 * Submits a proposed transaction to the multisig wallet.
 *
 * @param multiSig   Multisig wallet contract wrapper
 * @param contract   Contract to which we wish to send a transaction
 * @param methodName Name of the method we wish to call
 * @param args       Arguments to be passed to the method
 * @param txData     Optional transaction data
 * @return Transaction ID assigned by the multisig
 */
function submitMultiSigTransaction(multiSig, contract, methodName, args, txData, web3Instance = web3) {
    return __awaiter(this, void 0, void 0, function* () {
        ABIDecoder.addABI(multiSig.abi);
        const encodedTransaction = yield contract.web3ContractInstance[methodName].getData.apply(null, args);
        const txHash = yield multiSig.submitTransaction.sendTransactionAsync(contract.address, 
        // Ether value - 0.
        new bignumber_js_1.BigNumber(0), encodedTransaction, txData);
        // Get the transaction ID from the logs.
        const receipt = yield web3Instance.eth.getTransactionReceipt(txHash);
        const submission = ABIDecoder.decodeLogs(receipt.logs)[0];
        const transactionId = submission.events[0].value;
        ABIDecoder.removeABI(multiSig.abi);
        return transactionId;
    });
}
exports.submitMultiSigTransaction = submitMultiSigTransaction;
function submitRequisiteMultiSigConfirmations(multiSig, transactionId, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        // Send 2 more confirmations.
        for (let i = 1; i < 3; i++) {
            yield multiSig.confirmTransaction.sendTransactionAsync(new bignumber_js_1.BigNumber(transactionId), {
                from: accounts[i]
            });
        }
    });
}
function submitAndConfirmMultiSigTransaction(multiSig, contract, methodName, accounts, args = [], txData, web3Instance = web3) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactionData = Object.assign({ from: accounts[0] }, txData);
        // The last argument contains transaction data.
        args.push(transactionData);
        const transactionId = yield submitMultiSigTransaction(multiSig, contract, methodName, args, transactionData, web3Instance);
        yield submitRequisiteMultiSigConfirmations(multiSig, transactionId, accounts);
        return transactionId;
    });
}
/**
 * Executes a transaction using the given multi-signature wallet after waiting
 * for the requisite timelock period to pass.
 *
 * @param {Web3} web3
 * @param {DharmaMultiSigWalletContract} multiSig
 * @param contract
 * @param {string} methodName
 * @param {Address[]} accounts
 * @param {any[]} args
 * @param {TxData} txData
 * @returns {Promise<string>} txHash - the hash of the transaction that the multi-sig executed.
 */
function multiSigExecuteAfterTimelock(web3, multiSig, contract, methodName, accounts, args = [], timelock = migration_constants_1.TIMELOCK_IN_SECONDS, txData) {
    return __awaiter(this, void 0, void 0, function* () {
        const web3Utils = new web3_utils_1.Web3Utils(web3);
        const transactionId = yield submitAndConfirmMultiSigTransaction(multiSig, contract, methodName, accounts, args, txData, web3);
        yield web3Utils.increaseTime(timelock);
        const txHash = yield multiSig.executeTransaction.sendTransactionAsync(transactionId, txData);
        const transaction = yield multiSig.transactions.callAsync(transactionId);
        const [destination, value, data, executedSuccessfully] = transaction;
        if (!executedSuccessfully) {
            throw new Error(`Multisig transaction with ID #${transactionId} failed to execute.`);
        }
        return txHash;
    });
}
exports.multiSigExecuteAfterTimelock = multiSigExecuteAfterTimelock;
/**
 * Executes a transaction using the given multi-signature wallet without waiting
 * for the usually required timelock period to pass -- note that this ought to
 * fail for any transaction that does not call a method matching the `pause()`
 * selector.
 *
 * @param {Web3} web3
 * @param {DharmaMultiSigWalletContract} multiSig
 * @param contract
 * @param {string} methodName
 * @param {Address[]} accounts
 * @param {any[]} args
 * @param {TxData} txData
 * @returns {Promise<void>}
 */
function multiSigExecutePauseImmediately(web3, multiSig, contract, methodName, accounts, args = [], txData) {
    return __awaiter(this, void 0, void 0, function* () {
        const web3Utils = new web3_utils_1.Web3Utils(web3);
        const transactionId = yield submitAndConfirmMultiSigTransaction(multiSig, contract, methodName, accounts, args, txData, web3);
        const txHash = yield multiSig.executePauseTransactionImmediately.sendTransactionAsync(transactionId);
        const transaction = yield multiSig.transactions.callAsync(transactionId);
        const [destination, value, data, executedSuccessfully] = transaction;
        if (!executedSuccessfully) {
            throw new Error(`Multisig transaction with ID #${transactionId} failed to execute.`);
        }
        return txHash;
    });
}
exports.multiSigExecutePauseImmediately = multiSigExecutePauseImmediately;
//# sourceMappingURL=multisig.js.map