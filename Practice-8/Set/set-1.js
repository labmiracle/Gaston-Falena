function duplicates(array) {
    var set = new Set(array);
    return set.size !== array.length;
}
var arrayDuplicate = [1, 2, 3, 4, 5, 6, 7, 8, 8];
var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.assert(duplicates(array) === false, 'Hay duplicados');
console.assert(duplicates(arrayDuplicate) === true, 'Hay no duplicados');
