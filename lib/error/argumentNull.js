"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
const error_1 = require("../error");
const errorCode_1 = require("../errorCode");
/**
 * ArgumentNullError
 *
 * @class ArgumentNullError
 * @extends {WaiterError}
 */
class ArgumentNullError extends error_1.default {
    constructor(argumentName, message) {
        if (message === undefined || message.length === 0) {
            message = util.format('Missing argument: %s', argumentName);
        }
        super(errorCode_1.default.Argument, message);
        this.argumentName = argumentName;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ArgumentNullError.prototype);
    }
}
exports.default = ArgumentNullError;
