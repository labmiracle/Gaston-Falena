const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const cadena = 'Cadena a eleccion!';
    const url = req.url;

    if (url === '/miraclelab') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Bienvenido a miraclelab!</h1>\n');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Sobre Nosotros!</h1>\n');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada\n');
    }
    console.log('Método:', req.method);
    console.log('URL:', req.url);
    console.log('Encabezados:', req.headers);
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
