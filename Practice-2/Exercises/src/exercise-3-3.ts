function computeScore(word) {
    const letters = word.toUperCase().split('');
    return letters.reduce((accum, curr) => (accum = +getPointsFor(curr)), 0);
}
function getPointersFor(letters) {
    const lettersAndPoints = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce(
        (computedScore: number, pointsTuple: [string, number]) => {
            const [letters, score] = pointsTuple;
            if (letters.split('').find(ll => ll === letter)) {
                return (computedScore += score);
            }
            return computedScore;
        },
        0
    );
}
console.log(
    '[Ejercicio 3.3]',
    `zoologico vale ${computeScore('hola')} puntos.`
);
