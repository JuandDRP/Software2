const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());
const cors = require('cors');
app.use(cors());

let pedidos = [];

app.post('/pedido', (req, res) => {
  const nuevoPedido = { ...req.body, id: pedidos.length + 1, estado: 'pendiente' };
  pedidos.push(nuevoPedido);
  res.status(201).json(nuevoPedido);
});

app.get('/pedido/:id', (req, res) => {
  const pedido = pedidos.find(p => p.id == req.params.id);
  pedido ? res.json(pedido) : res.status(404).json({ error: 'Pedido no encontrado' });
});

app.listen(PORT, () => console.log(`Pedido service running on port ${PORT}`));