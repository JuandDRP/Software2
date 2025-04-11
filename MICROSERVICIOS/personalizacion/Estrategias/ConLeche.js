function ConLeche(bebida) {
    bebida.descripcion += ' con leche';
    bebida.precio += 1;
    return bebida;
  }
  
  module.exports = ConLeche;
  