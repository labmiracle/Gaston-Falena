const http5 = require('http');
const fs5 = require('fs');
const path5 = require('path');
const serverConfig1 = require('./serverConfig.ts');

const host = serverConfig1.host;
const PORT5 = serverConfig1.port;
//Entran a localhost:5000 para ir mas facil desde el link del index
const server5 = http5.createServer((req, res) => {
    if (req.url === '/about.html') {
        const filePath = path5.join(__dirname, 'vistas', 'about.html');

        fs5.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        const indexPath = path5.join(__dirname, 'vistas', 'index.html');
        fs5.readFile(indexPath, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
});

server5.listen(PORT5, () => {
    console.log(`Servidor en funcionamiento en http://${host}:${PORT5}`);
});
