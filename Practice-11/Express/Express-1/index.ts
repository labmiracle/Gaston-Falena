const express = require('express');

const app = express();
const PORT1 = 4567;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('desde la ruta !');
});

app.get('/yo', (req, res) => {
    res.send('desde la ruta /yo');
});
const currentRoute = (req, res, next) => {
    console.log('URL actual:', req.url);
    next();
};

app.use(currentRoute);

app.listen(PORT1, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT1}`);
});
