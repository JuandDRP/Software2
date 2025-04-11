const express = require('express');
const app = express();
const PORT = 3004;
app.use(express.json());
const cors = require('cors');
app.use(cors());
const observadores = require('./observer');

app.post('/notificar', (req, res) => {
  const { mensaje } = req.body;
  observadores.forEach(obs => obs.update(mensaje));
  res.json({ estado: 'Notificado' });
});

app.listen(PORT, () => console.log(`Notificacion service running on port ${PORT}`));