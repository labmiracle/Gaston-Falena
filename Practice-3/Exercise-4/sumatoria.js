export default function sumatoria(numeros) {
  const numerosPositivos = [];
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (typeof +numeros[i] === "number" && !isNaN(numeros[i])) {
      let noNumber = Number(numeros[i]);
      numerosPositivos.push(noNumber);
    } else if (numeros[i] > 0 && typeof numeros[i] === "number") {
      numerosPositivos.push(numeros[i]);
    }
  }
  suma = numerosPositivos.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);
  if (suma > 0) {
    return suma;
  }
  return 0;
}

console.log(sumatoria([3, 1, "a"]));
