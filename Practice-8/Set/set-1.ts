
function duplicates(array:number[]):boolean{
    const set = new Set(array);
    return set.size !== array.length;
}

const arrayDuplicate=[1,2,3,4,5,6,7,8,8];
const array=[1,2,3,4,5,6,7,8]


console.assert(duplicates(array) === false, 'Hay duplicados');
console.assert(duplicates(arrayDuplicate) === true, 'Hay no duplicados');