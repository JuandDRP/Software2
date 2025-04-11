function SinAzucar(bebida) {
    bebida.descripcion += ' sin azúcar';
    return bebida; // sin cambio de precio
  }
  
  module.exports = SinAzucar;
  