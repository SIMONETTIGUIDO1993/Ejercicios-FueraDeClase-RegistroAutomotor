"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(dominio, año, prenda) {
        this.dominio = dominio;
        this.año = año;
        this.prenda = prenda;
    }
    RegistroAutomotor.prototype.setDominio = function (dominio) {
        this.dominio = dominio;
    };
    RegistroAutomotor.prototype.getDominio = function () {
        console.log(this.dominio);
    };
    RegistroAutomotor.prototype.setAño = function (año) {
        this.año = año;
    };
    RegistroAutomotor.prototype.getAño = function () {
        console.log(this.año);
    };
    RegistroAutomotor.prototype.setPrenda = function (prenda) {
        this.prenda = prenda;
    };
    RegistroAutomotor.prototype.getPrenda = function () {
        console.log(this.prenda);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
