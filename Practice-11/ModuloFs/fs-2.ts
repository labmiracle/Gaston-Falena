const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/dirname') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Valor de __dirname: ${__dirname}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Servidor funcionado en: http://localhost:${PORT}`);
});
