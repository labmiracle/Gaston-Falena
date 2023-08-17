function zero(operation = null) {
    return operation ? operation(0) : 0;
}

function one(operation = null) {
    return operation ? operation(1) : 1;
}

function two(operation = null) {
    return operation ? operation(2) : 2;
}

function three(operation = null) {
    return operation ? operation(3) : 3;
}

function four(operation = null) {
    return operation ? operation(4) : 4;
}

function five(operation = null) {
    return operation ? operation(5) : 5;
}

function six(operation = null) {
    return operation ? operation(6) : 6;
}

function seven(operation = null) {
    return operation ? operation(7) : 7;
}

function eight(operation = null) {
    return operation ? operation(8) : 8;
}

function nine(operation = null) {
    return operation ? operation(9) : 9;
}

function plus(rightOperand) {
    return leftOperand => leftOperand + rightOperand;
}

function minus(rightOperand) {
    return leftOperand => leftOperand - rightOperand;
}

function times(rightOperand) {
    return leftOperand => leftOperand * rightOperand;
}

function dividedBy(rightOperand) {
    return leftOperand => Math.floor(leftOperand / rightOperand);
}

console.log(seven(times(five()))); // Devuelve 35
console.log(four(plus(nine()))); // Devuelve 13
console.log(eight(minus(three()))); // Devuelve 5
console.log(six(dividedBy(two()))); // Devuelve 3
