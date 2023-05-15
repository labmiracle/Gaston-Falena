function greet(greeting: string = 'hola'): string | void {
    if (greeting !== undefined) {
        return greeting.toUpperCase();
    }
    return;
}

const defaultGreeting = greet();
const protugueseGreeting = greet('oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, protugueseGreeting);
