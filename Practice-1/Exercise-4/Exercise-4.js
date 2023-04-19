/* Crea una funcion que reciba una frase como cadena y vevuelva
la palabra mas larga:
function palabraMasLarga(str){

}
console.assert(palabraMasLarga('Erase una vez que se era' === 'Erase');
Crea una funcion que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayuscula
function primeraMayuscula(str){

}
console.assert(primeraMayuscula('En un lugar de la Mancha' ==='En Un Lugar De La Mancha'))*/
function palabraMasLarga(str){
    const palabras = str.split(" ")
    let palabra="";
    for(let i = 0; i < palabras.length ; i++){
    if(palabras[i].length > palabra.length){
        palabra = palabras[i];
        }
    }
 return palabra;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

//
function primeraMayuscula(str){
    return str.split(" ").map((letra)=>{
        return letra.charAt(0).toUpperCase() + letra.slice(1)
    }).join(" ")
}
console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');