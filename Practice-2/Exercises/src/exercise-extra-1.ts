function myFunction(joyas: string, piedras: string): number {
    const joyitas = joyas.slice(0);
    const piedritas = piedras.slice(0);
    let acumulador = 0;
    for (let i = 0; piedritas.length > i; i++) {
        for (let j = 0; joyitas.length > j; j++) {
            if (piedritas[i] === joyitas[j]) {
                acumulador++;
            }
        }
    }
    return acumulador;
}

console.assert(myFunction('aA', 'aAAbbb') === 3);
console.assert(myFunction('z', 'ZZ') === 0);
