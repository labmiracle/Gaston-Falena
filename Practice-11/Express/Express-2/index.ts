const express1 = require('express');
const httpProxy = require('http-proxy');

const PORT = 4567;
const app1 = express1();
const proxy = httpProxy.createProxyServer();

const urlIndex = __dirname + '/public/index.html';
app1.get('/api/*', (req, res) => {
    proxy.web(req, res, { target: urlIndex });
});

app1.use(express1.static(__dirname + '/public'));

app1.get('/', (req, res) => {
    res.sendFile(urlIndex);
});

app1.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
