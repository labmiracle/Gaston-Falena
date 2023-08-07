"use strict";
exports.__esModule = true;
var pila_1 = require("./pila");
//Ejercicio 1
var p1 = new pila_1["default"]();
p1.push('gaston');
p1.push('falena');
p1.push('rosario');
console.log(p1.size());
console.log(p1.pop());
console.log(p1.size());
// Ejercicio 2
var p2 = new pila_1["default"]();
var decimal = 25;
var binary = p2.decimalToBinary(decimal);
console.log(binary);
//Ejercicio 3
var pila = new pila_1["default"]();
var decimalNumber = 25;
var base = 16;
var baseRepresentation = pila.decimalToBase(decimalNumber, base);
console.log("El n\u00FAmero decimal ".concat(decimalNumber, " en base ").concat(base, " es: ").concat(baseRepresentation));
