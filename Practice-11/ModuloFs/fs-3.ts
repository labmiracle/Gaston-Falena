const fs2 = require('fs');
const filename = 'archivo.txt';
fs2.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
    } else {
        console.log('Contenido del archivo:', data);
    }
});
