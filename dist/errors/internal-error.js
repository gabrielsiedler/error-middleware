"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var custom_error_1 = require("./custom-error");
var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(error) {
        var _this = this;
        console.error('Internal error: ', error);
        _this = _super.call(this, 'An error occurred. Please try again later.', 500, 'InternalError') || this;
        return _this;
    }
    return InternalError;
}(custom_error_1.CustomError));
exports.InternalError = InternalError;
