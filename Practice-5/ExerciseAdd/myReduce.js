//Interpretando que el ejercicio se basa en realizar funciones nativas map,filter,find,reduce
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}
