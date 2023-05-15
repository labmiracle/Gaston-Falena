const numbers  = [1,2,3,[44,55],6,[77,88],9,10];

function flatten<T>(array: (T |T[])[]) : T[]{ //Cada elemnto del array puede ser T O T[] y luego se define el array que los contiene con []
    const flattened: T[] = [];

    for(const element of array) {
        if(Array.isArray(element)){
            element; // any []
            flattened.push(...element);
        }else{
            element; // any
            flattened.push(element);
        }
    }
    return flattened;
}

const flattenedNumbers = flatten(numbers);
console.log('[Ejerciciop 4.3]', flattenedNumbers);