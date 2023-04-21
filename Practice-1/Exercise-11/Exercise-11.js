/*Escriba una función llamadaonlyUniquesque pueda tomar cualquier
 cantidad de argu-mentos y devuelva un arreglo de solo los argumentos únicos */

 function onlyUniques(...arrays){
    const set = new Set(...arrays)
    return Array.from(set)
 }
 const array1 = [1,2,3,4,4,4,5]
 console.log(onlyUniques(array1))