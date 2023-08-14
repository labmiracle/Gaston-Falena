const http2 = require('http');
const fs3 = require('fs');
const path = require('path');

const PORT2 = 5000;
//Entran a localhost:5000 para ir mas facil desde el link del index
const server2 = http2.createServer((req, res) => {
    const filePath = path.join(
        __dirname,
        'vistas',
        req.url === '/' ? 'index.html' : req.url
    );
    fs3.readFile(filePath, (err, content) => {
        if (err) {
            console.error(`Archivo no encontrado: ${filePath}`);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server2.listen(PORT2, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT2}`);
});
