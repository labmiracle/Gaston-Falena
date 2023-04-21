// Escriba una función llamadacombineTwoArraysque tome dos arreglos como argumentosy
//  devuelva un solo arreglo que combine ambos (usando el operador...)

function combineTwoArrays(array1,array2){
    const arrayComb = [...array1,...array2]
    return arrayComb
    
}

const array1 = [1,2,3]
const array2 = [4,5,6]
console.log(llamadacombineTwoArrays(array1,array2))