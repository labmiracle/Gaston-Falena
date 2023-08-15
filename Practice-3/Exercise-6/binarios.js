export default function binarios(matris) {
    let maxConsecutivos = 0;
    let currentConsecutivos = 0;

    for (let celdas of matris) {
        if (celdas !== 0 && celdas !== 1 && celdas !== '0' && celdas !== '1') {
            return -1;
        }

        if (celdas == 1 || celdas === '1') {
            currentConsecutivos++;
            maxConsecutivos = Math.max(maxConsecutivos, currentConsecutivos);
        } else {
            currentConsecutivos = 0;
        }
    }

    return maxConsecutivos;
}

const matris = [1, '1', 1, 0, 1, 1, '1', 1, 0, '1', '0'];

const result = binarios(matris);
console.log('Número máximo de 1s consecutivos:', result);
