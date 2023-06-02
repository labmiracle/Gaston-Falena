import primerCaracterRepetido from "./primerCaracter.js";
describe("test primer caracter", () => {
  test("cadena sin espacios", () => {
    const result = primerCaracterRepetido("abcc");
    expect(result).toBe(2);
  });
  test("cadena repetidos", () => {
    const result = primerCaracterRepetido("abc");
    expect(result).toBe(-1);
  });
  test("ingresando un array", () => {
    const result = primerCaracterRepetido([3, 2, 1, 1]);
    expect(result).toBe(2);
  });
  test("ingresando un array sin repetidos", () => {
    const result = primerCaracterRepetido([3, 2, 1]);
    expect(result).toBe(-1);
  });
  test("ingresando numeros", () => {
    const result = primerCaracterRepetido(123);
    expect(result).toBe(-1);
  });
});
