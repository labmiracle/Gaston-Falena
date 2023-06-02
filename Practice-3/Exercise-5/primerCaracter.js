export default function primerCaracterRepetido(cadena) {
  if (typeof cadena === "number") {
    cadena = cadena.toString();
  }
  if (typeof cadena === "object") {
    cadena = cadena.join("");
  }
  let cadenSinEspacios = cadena.split(" ").join("").toUpperCase();
  cadena = cadena.toUpperCase();
  let repetidos = [];
  for (let i = 0; i < cadenSinEspacios.length - 1; i++) {
    if (cadenSinEspacios[i] === cadenSinEspacios[i + 1]) {
      repetidos.push(cadenSinEspacios[i]);
    }
  }
  if (repetidos.length === 0) {
    return -1;
  }
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === repetidos[0]) {
      return i;
    }
  }
}
