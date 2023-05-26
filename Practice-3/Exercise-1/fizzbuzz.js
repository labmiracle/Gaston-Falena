function fizzBuzz(numero) {
    if (typeof numero !== 'number') {
        return 'Se esperaba un numero';
    }
    if (numero === 0) {
        return 'FizzBuzz';
    }
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    }
    if (numero % 3 === 0) {
        return 'Fizz';
    }
    if (numero % 5 === 0) {
        return 'Buzz';
    }

    return numero;
}

module.exports = fizzBuzz;
