const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// RUTAS CRUD
app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  db.query('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nombre, precio });
  });
});

app.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  db.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, nombre, precio });
  });
});

app.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM productos WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Producto eliminado' });
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
