//Interpretando que el ejercicio se basa en realizar funciones nativas map,filter,find,reduce
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
