const fs = require('fs');

fs.realpath('.', (err, path) => {
    if (err) {
        console.error('Error al obtener el directorio actual:', err);
    } else {
        console.log('Directorio actual:', path);
    }
});
