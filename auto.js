"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Auto = void 0;
var registroAutomotor_1 = require("./registroAutomotor");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(nroChasis, cantPuertas, dominio, año, prenda) {
        var _this = _super.call(this, dominio, año, prenda) || this;
        _this.nroChasis = nroChasis;
        _this.cantPuertas = cantPuertas;
        return _this;
    }
    Auto.prototype.setNroChasis = function (nroChasis) {
        this.nroChasis = nroChasis;
    };
    Auto.prototype.getNroChasis = function () {
        console.log(this.nroChasis);
    };
    Auto.prototype.setCantPuertas = function (cantPuertas) {
        this.cantPuertas = cantPuertas;
    };
    Auto.prototype.getCantPuertas = function () {
        console.log(this.cantPuertas);
    };
    return Auto;
}(registroAutomotor_1.RegistroAutomotor));
exports.Auto = Auto;
