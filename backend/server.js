const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const productosPath = path.join(__dirname, 'productos.json');

app.use(express.json());

// Obtener productos
app.get('/productos', (req, res) => {
    fs.readFile(productosPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error leyendo productos');
        const productos = JSON.parse(data);
        res.json(productos);
    });
});

// Agregar producto
app.post('/productos', (req, res) => {
    const nuevoProducto = req.body;

    fs.readFile(productosPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error leyendo productos');
        
        const productos = JSON.parse(data);
        productos.push(nuevoProducto);

        fs.writeFile(productosPath, JSON.stringify(productos, null, 2), (err) => {
            if (err) return res.status(500).send('Error guardando producto');
            res.send('Producto guardado correctamente');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
