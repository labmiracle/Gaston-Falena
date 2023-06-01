import anioBiciesto from './biciesto.js';

describe('anioBiciesto test resultados breakpoint', () => {
    test('Ingresando un numero divisible por 4', () => {
        const result = anioBiciesto(8);
        expect(result).toBeTruthy();
    });
    test('Ingresando un numero divisible por 100 pero no por 400', () => {
        const result = anioBiciesto(200);
        expect(result).toBeFalsy();
    });
    test('Ingresando un numero divisible por 400', () => {
        const result = anioBiciesto(1600);
        expect(result).toBeTruthy();
    });
    test('Ingresando un numero no divisible por 4', () => {
        const result = anioBiciesto(165);
        expect(result).toBeFalsy();
    });
    test('Ingresando 0', () => {
        const result = anioBiciesto(0);
        expect(result).toBeFalsy();
    });
    test('Ingresando una cadena', () => {
        const result = anioBiciesto('8');
        expect(result).toBeFalsy();
    });
});
