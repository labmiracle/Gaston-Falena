var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function concatNoDuplicated(array1, array2) {
    var arrayDuplicate = __spreadArray(__spreadArray([], array1, true), array2, true);
    var setNoDuplicate = new Set(arrayDuplicate);
    var arrayNoDuplicate = Array.from(setNoDuplicate);
    return arrayNoDuplicate;
}
var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.assert(concatNoDuplicated(array1, array2).length === 8);
