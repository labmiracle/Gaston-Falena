function adnFilter(cadena) {
  if (typeof cadena !== "string") {
    return "";
  }
  const caracteres = cadena.split("");
  const adnValido = [];
  for (let i = 0; i < caracteres.length; i++) {
    if (
      caracteres[i] === "C" ||
      caracteres[i] === "T" ||
      caracteres[i] === "A" ||
      caracteres[i] === "G"
    ) {
      adnValido.push(caracteres[i]);
    }
  }
  return adnValido.join("");
}

export default adnFilter;
