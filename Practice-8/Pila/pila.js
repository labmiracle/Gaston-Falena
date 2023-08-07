"use strict";
exports.__esModule = true;
var Pila = /** @class */ (function () {
    function Pila() {
        this.elementos = [];
    }
    Pila.prototype.push = function (elemento) {
        this.elementos.push(elemento);
    };
    Pila.prototype.pop = function () {
        return this.elementos.pop();
    };
    Pila.prototype.size = function () {
        return this.elementos.length;
    };
    Pila.prototype.decimalToBinary = function (decimal) {
        if (decimal === 0) {
            return '0';
        }
        this.elementos = [];
        while (decimal > 0) {
            var res = decimal % 2;
            this.push(res.toString());
            decimal = Math.floor(decimal / 2);
        }
        var binary = '';
        while (this.size() > 0) {
            binary += this.pop();
        }
        return binary;
    };
    Pila.prototype.decimalToBase = function (decimalNumber, base) {
        if (base <= 2 || base >= 36) {
            throw new Error('La base debe estar entre 2 y 36.');
        }
        if (decimalNumber === 0) {
            return '0';
        }
        var stack = new Pila();
        var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        while (decimalNumber > 0) {
            var remainder = decimalNumber % base;
            stack.push(digits[remainder]);
            decimalNumber = Math.floor(decimalNumber / base);
        }
        var baseResult = '';
        while (stack.size() > 0) {
            baseResult += stack.pop();
        }
        return baseResult;
    };
    return Pila;
}());
exports["default"] = Pila;
