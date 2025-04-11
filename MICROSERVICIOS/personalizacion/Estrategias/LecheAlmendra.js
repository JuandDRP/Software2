function LecheAlmendra(bebida) {
    bebida.descripcion += ' con leche de almendra';
    bebida.precio += 2;
    return bebida;
  }
  
  module.exports = LecheAlmendra;
  