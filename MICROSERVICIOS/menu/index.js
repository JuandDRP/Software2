const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const menu = [
  { tipo: 'cafe', nombre: 'Café', precio: 5000 },
  { tipo: 'te', nombre: 'Té', precio: 4000 },
  { tipo: 'chocolate', nombre: 'Chocolate', precio: 6000 }
];

app.get('/menu', (req, res) => {
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`✅ Microservicio de menú corriendo en http://localhost:${PORT}`);
});
