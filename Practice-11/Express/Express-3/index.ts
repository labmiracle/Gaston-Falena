const express2 = require('express');

const app2 = express2();
const PORT2 = 4567;

app2.use(express2.json());

const listaCompras = [
    { nombre: 'Leche', precio: 500, id: 1 },
    { nombre: 'Pan', precio: 350, id: 2 },
    { nombre: 'Huevos', precio: 100, id: 3 },
    { nombre: 'Manzanas', precio: 1200, id: 4 },
    { nombre: 'Arroz', precio: 400, id: 5 },
    { nombre: 'Lentejas', precio: 300, id: 6 },
];

app2.get('/', (req, res) => {
    res.send('Verduleria MultiShop');
});
app2.get('/items', (req, res) => {
    res.json(listaCompras);
});

app2.post('/items', (req, res) => {
    const nuevoItem = req.body;
    listaCompras.push(nuevoItem);
    res.status(201).json(nuevoItem);
});

app2.get('/items/:id', (req, res) => {
    const idItem = parseInt(req.params.id);
    const item = listaCompras[idItem];
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ mensaje: 'Elemento no encontrado' });
    }
});

app2.patch('/items/:id', (req, res) => {
    const idItem = parseInt(req.params.id);
    const itemActualizado = req.body;
    if (listaCompras[idItem]) {
        listaCompras[idItem] = { ...listaCompras[idItem], ...itemActualizado };
        res.json(listaCompras[idItem]);
    } else {
        res.status(404).json({ mensaje: 'Elemento no encontrado' });
    }
});

app2.delete('/items/:id', (req, res) => {
    const idItem = parseInt(req.params.id);
    if (listaCompras[idItem]) {
        listaCompras.splice(idItem, 1);
        res.json({ mensaje: 'Elemento eliminado' });
    } else {
        res.status(404).json({ mensaje: 'Elemento no encontrado' });
    }
});

app2.listen(PORT2, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT2}`);
});
