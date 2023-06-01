import adnFilter from "./adn.js";

describe("Adn filter test breakpoints", () => {
  test("Cadena toda en mayuscula", () => {
    const result = adnFilter("ASDAWEQT");
    expect(result).toBe("AAT");
  });
  test("Cadena vacia", () => {
    const result = adnFilter("");
    expect(result).toBe("");
  });
  test("Cadena toda en minuscula con a c g t", () => {
    const result = adnFilter("acgtas");
    expect(result).toBe("");
  });
  test("Cadena con mayusculas y minusculas", () => {
    const result = adnFilter("AstarQT");
    expect(result).toBe("AT");
  });
  test("nuemros", () => {
    const result = adnFilter(123);
    expect(result).toBe("");
  });
  test("Ingresando un array", () => {
    const result = adnFilter(["a", "A"]);
    expect(result).toBe("");
  });
});
