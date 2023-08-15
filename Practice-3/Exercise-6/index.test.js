import binarios from './binarios';
describe('test numeros binarios', () => {
    test('ingresar un espacio', () => {
        const result = binarios(' ');
        expect(result).toBe(-1);
    });
    test('ingresando letras', () => {
        const result = binarios('abc');
        expect(result).toBe(-1);
    });
    test('ingresando 5 unos seguidos', () => {
        const result = binarios([1, 1, 1, 1, 1]);
        expect(result).toBe(5);
    });
    test('ingresando no seguidos', () => {
        const result = binarios([1, 0, 1]);
        expect(result).toBe(1);
    });
    -test('encuentra el numero maximo consecutivo', () => {
        const result = binarios([1, 1, 1, 1, 1, 1, 1, 1, 0, 1]);
        expect(result).toBe(8);
    });
    test('encuentra el numero maximo consecutivo con strings', () => {
        const result = binarios(['1', '1', '1', '1', '1', 1, 1, 1, 0, 1]);
        expect(result).toBe(8);
    });
});
