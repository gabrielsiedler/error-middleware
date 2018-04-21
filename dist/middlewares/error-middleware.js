"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var Errors = __importStar(require("../errors"));
var internal_error_1 = require("../errors/internal-error");
var errorHandlingMiddleware = function (err, req, res, next) {
    var customErrors = Object.keys(Errors);
    if (customErrors.some(function (customError) { return err instanceof customError; })) {
        res.status(err.code).send(err.output());
        return;
    }
    console.error(err);
    var internalError = new internal_error_1.InternalError();
    res.status(internalError.code).send(internalError.output());
};
module.exports = errorHandlingMiddleware;
