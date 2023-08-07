import Pila from './pila';
//Ejercicio 1
let p1: Pila = new Pila();
p1.push('gaston');
p1.push('falena');
p1.push('rosario');
console.log(p1.size());
console.log(p1.pop());
console.log(p1.size());

// Ejercicio 2
const p2 = new Pila();
const decimal = 25;
const binary = p2.decimalToBinary(decimal);
console.log(binary);
//Ejercicio 3
const pila = new Pila();
const decimalNumber = 25;
const base = 16;
const baseRepresentation = pila.decimalToBase(decimalNumber, base);
console.log(
    `El número decimal ${decimalNumber} en base ${base} es: ${baseRepresentation}`
);
