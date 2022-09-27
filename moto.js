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
exports.Moto = void 0;
var registroAutomotor_1 = require("./registroAutomotor");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(nroCuadro, dominio, año, prenda) {
        var _this = _super.call(this, dominio, año, prenda) || this;
        _this.nroCuadro = nroCuadro;
        return _this;
    }
    Moto.prototype.setNroCuadro = function (nroCuadro) {
        this.nroCuadro = nroCuadro;
    };
    Moto.prototype.getNroCuadro = function () {
        console.log(this.nroCuadro);
    };
    return Moto;
}(registroAutomotor_1.RegistroAutomotor));
exports.Moto = Moto;
