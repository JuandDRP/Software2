const express = require('express');
const { aplicarEstrategias } = require('./aplicarEstrategias');
const Cafe = require('./Bebidas/Cafe');
const Te = require('./Bebidas/Te');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



app.post('/personalizar', (req, res) => {
  const { tipo, estrategias } = req.body;

  let bebida;
  if (tipo === 'cafe') bebida = new Cafe();
  else if (tipo === 'te') bebida = new Te();
  else return res.status(400).json({ error: 'Tipo de bebida no válida' });

  const resultado = aplicarEstrategias(bebida, estrategias);
  res.json(resultado);
});

app.listen(4002, () => {
  console.log('Servicio de personalización corriendo en puerto 4002');
});
