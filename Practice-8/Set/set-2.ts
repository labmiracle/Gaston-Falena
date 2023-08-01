function concatNoDuplicated(
    array1: number[] | string[],
    array2: number[] | string[]
) {
    const arrayDuplicate = [...array1, ...array2];

    const setNoDuplicate = new Set(arrayDuplicate);

    const arrayNoDuplicate = Array.from(setNoDuplicate);

    return arrayNoDuplicate;
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.assert(concatNoDuplicated(array1, array2).length === 8);
