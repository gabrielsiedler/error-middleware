"use strict";
var errors_1 = require("../errors");
var internal_error_1 = require("../errors/internal-error");
var errorHandlingMiddleware = function (err, req, res, next) {
    var customErrors = [
        errors_1.BadRequestError,
        errors_1.ForbiddenError,
        errors_1.NotFoundError,
        errors_1.UnauthorizedError,
        errors_1.ValidationError,
    ];
    if (customErrors.some(function (customError) { return err instanceof customError; })) {
        res.status(err.code).send(err.output());
        return;
    }
    console.error(err);
    var internalError = new internal_error_1.InternalError();
    res.status(internalError.code).send(internalError.output());
};
module.exports = errorHandlingMiddleware;
