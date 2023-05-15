"use strict";
function add(x, y) {
    return +x + +y; //Convierte los valores a number
}
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
const someSum = sumArray(['3', '6', '9']);
console.log('[Ejercico 3.1]', `3 +6 + 9 ===${someSum}`);
