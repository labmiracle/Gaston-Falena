/*
Crea una funcion que reciba una cadena y la devuelva en camelCase
function camelize(str) {

}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal')
*/

function camelize(str) {
    const palabras = str.split(" ") //crea un array con palabras a partir de la oracion inicial separados por espacios
    let camelCase =""
    for(let i = 0; i < palabras.length; i++){
        if(i == 1){
            camelCase= palabras[0].toLowerCase() //Guarda la primer palabra y la inicia en minuscula
        }
        camelCase += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase()//Seteamos la primera letra en mayuscula y luego a partir de la posicion 1 convertimos en minusculas
       
    }
    return camelCase;
}

console.log(camelize('Hola a todos que tal') === 'holaATodosQueTal')