"use strict";
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
function flatten(array) {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any []
            flattened.push(...element);
        }
        else {
            element; // any
            flattened.push(element);
        }
    }
    return flattened;
}
const flattenedNumbers = flatten(numbers);
console.log('[Ejerciciop 4.3]', flattenedNumbers);
