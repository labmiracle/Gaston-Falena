const http1 = require('http');

const server1 = http1.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Pagina de inicio</h1>');
    } else if (url === '/sobre-nosotros') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Soy un alumno de miracle lab</h1>');
    } else if (url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Este es mi mail:gastonfalena@gmail.com</h1>');
    } else if (url === '/que-hacemos') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Estamos trabajando en ejercicios http</h1>');
    } else if (url === '/donde-estamos') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Nos encontramos en la ciudad de Rosario</h1>');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Pagina no encontrada');
    }
});

const PORT1 = 5000;

server1.listen(PORT1, () => {
    console.log(`Servidor escuchando en el puerto ${PORT1}`);
});
