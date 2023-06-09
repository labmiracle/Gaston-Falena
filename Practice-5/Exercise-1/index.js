const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// FUNCION MAP
// Obtener un arreglo de todos los nombres
const names = characters.map((item) => item.name);
// Obtener un arreglo de todas las alturas
const height = characters.map((item) => item.height);
// Obtener un arreglo de objetos con las propiedades de nombre y altura
const namesAndHeights = characters.map((item) => ({
  name: item.name,
  height: item.height,
}));

// Obtener un arreglo de todos los nombres

// FUNCION REDUCE
// Obtener la masa total de todos los personajes
const totalMass = characters.reduce((totalM, currentM) => {
  return (totalM = totalM + parseInt(currentM.mass));
}, 0);
// Obtener la altura total de todos los caracteres
const totalHeight = characters.reduce((totalH, currentH) => {
  return (totalH = totalH + parseInt(currentH.height));
}, 0);
// Obtener el número total de caracteres en todos los nombres de los personajes
const totalCharactersName = characters.reduce((totalCN, currentC) => {
  return (totalCN = totalCN + currentC.name.length);
}, 0);
// Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojospara contar)
const totalCharactersEyesC = characters.reduce((totalCE, currentE) => {
  return (totalCE = totalCE + currentE.eye_color.length);
}, 0);
console.log(totalCharactersEyesC);
// FUNCION FILTER
// Obtener personajes con masa superior a 100
const mass100 = characters.filter((currentMass) => currentMass.mass > 100);
// Obtener personajes con una altura inferior a 200

const heightLow = characters.filter(
  (currentHeight) => currentHeight.height < 200
);
// Obtener todos los personajes masculinos
const male = characters.filter((currentC) => currentC.gender === "male");
// Obtener todos los personajes femeninos
const female = characters.filter((currentC) => currentC.gender === "female");
// FUNCTION SORT
// Ordenar por nombre
characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1; // -1 significa que a debe colocarse antes que b
  } else if (a.name > b.name) {
    return 1; // 1 significa que a debe colocarse luego que b
  } else {
    return 0; // 0 significa que el el orden no va cambiar
  }
});
// Ordenar por masa
characters.sort((a, b) => {
  const massA = parseInt(a.mass);
  const massB = parseInt(b.mass);
  if (massA < massB) {
    return -1; // -1 significa que a debe colocarse antes que b
  } else if (massA > massB) {
    return 1; // 1 significa que a debe colocarse luego que b
  } else {
    return 0; // 0 significa que el el orden no va cambiar
  }
});
// Ordenar por altura
characters.sort((a, b) => {
  const heightA = parseInt(a.height);
  const heightB = parseInt(b.height);
  if (heightA < heightB) {
    return -1; // -1 significa que a debe colocarse antes que b
  } else if (heightA > heightB) {
    return 1; // 1 significa que a debe colocarse luego que b
  } else {
    return 0; // 0 significa que el el orden no va cambiar
  }
});
characters.sort((b, a) => {
  if (a.gender < b.gender) {
    return -1; // -1 significa que a debe colocarse antes que b
  } else if (a.gender > b.gender) {
    return 1; // 1 significa que a debe colocarse luego que b
  } else {
    return 0; // 0 significa que el el orden no va cambiar
  }
});
// Función every
// ¿Todos los personajes tienen ojos azules?
const blueEyes = characters.every((char) => char.eye_color === "blue");
//¿Todos los personajes tienen una masa superior a 40?
const mass40 = characters.every((char) => char.mass > 40);
//¿Todos los caracteres son más bajos que 200?
const height200 = characters.every((char) => char.height < 200);
//¿Todos los personajes son hombres?
const allMale = characters.every((char) => char.gender === "male");
//Función some
//¿Hay al menos un personaje masculino?
const oneMale = characters.some((char) => char.gender === "male");
//¿Hay al menos un personaje con ojos azules?
const oneBlueEyes = characters.some((char) => char.eye_color === "blue");
//¿Hay al menos un personaje más alto que 200?
const oneHeight200 = characters.some((char) => char.height > 200);
//¿Hay al menos un personaje que tenga una masa inferior a 50?
const oneMass40 = characters.some((char) => char.mass < 40);
