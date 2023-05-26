const fizzBuzz = require('./fizzbuzz.js');

test('Ingresando 0', () => {
    const result = fizzBuzz(0);
    expect(result).toBe('FizzBuzz');
});

test('Ingresando una cadena', () => {
    const result = fizzBuzz('123');
    expect(result).toBe('Se esperaba un numero');
});
test('Ingresando un numero divisible por 3', () => {
    const result = fizzBuzz(6);
    expect(result).toBe('Fizz');
});
test('Ingresando un numero divisible por 5', () => {
    const result = fizzBuzz(10);
    expect(result).toBe('Buzz');
});
test('Ingresando un numero divisible por 3 y 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
});
test('Ingresando un numero que no cumple ninguna de las condiciones ', () => {
    const result = fizzBuzz(17);
    expect(result).toBe(17);
});
