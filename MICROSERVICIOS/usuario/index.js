const express = require('express');
const app = express();
const PORT = 3005;
app.use(express.json());
const cors = require('cors');
app.use(cors());
let usuarios = [];

app.post('/usuario', (req, res) => {
  const nuevoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.get('/usuario/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  usuario ? res.json(usuario) : res.status(404).json({ error: 'Usuario no encontrado' });
});

app.listen(PORT, () => console.log(`Usuario service running on port ${PORT}`));
