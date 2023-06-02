import sumatoria from "./sumatoria.js";

describe("Test de sumatoria", () => {
  test("ingresando solamente letras", () => {
    const result = sumatoria(["a", "b", "c"]);
    expect(result).toBe(0);
  });
  test("ingresando solamente nuemros", () => {
    const result = sumatoria([3, 2, 1]);
    expect(result).toBe(6);
  });
  test("ingresando strings de numeros y numeros", () => {
    const result = sumatoria(["3", "2", 1]);
    expect(result).toBe(6);
  });
  test("ingresando string de letras y numeros", () => {
    const result = sumatoria(["a", 3, 1]);
    expect(result).toBe(4);
  });
  test("ingresando 0", () => {
    const result = sumatoria([0]);
    expect(result).toBe(0);
  });
});
