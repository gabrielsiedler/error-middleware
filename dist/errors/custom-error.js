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
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message, code, type) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this) || this;
        _this.__proto__ = trueProto;
        _this._message = message;
        _this._code = code;
        _this._type = type;
        return _this;
    }
    Object.defineProperty(CustomError.prototype, "code", {
        get: function () {
            return this._code || 400;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomError.prototype, "type", {
        get: function () {
            return this._type || 'CustomError';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomError.prototype, "message", {
        get: function () {
            return this._message || '';
        },
        enumerable: true,
        configurable: true
    });
    CustomError.prototype.output = function () {
        var output = {
            code: this.code,
            type: this.type,
            error: null,
        };
        if (this.message) {
            output.error = this.message;
        }
        return output;
    };
    return CustomError;
}(Error));
exports.CustomError = CustomError;
