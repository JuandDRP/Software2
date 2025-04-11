const ConLeche = require('./Estrategias/ConLeche');
const SinAzucar = require('./Estrategias/SinAzucar');
const LecheAlmendra = require('./Estrategias/LecheAlmendra');

const estrategiasDisponibles = {
  conLeche: ConLeche,
  sinAzucar: SinAzucar,
  lecheAlmendra: LecheAlmendra
};

function aplicarEstrategias(bebida, estrategias) {
  estrategias.forEach(nombre => {
    const estrategia = estrategiasDisponibles[nombre];
    if (estrategia) {
      bebida = estrategia(bebida);
    }
  });

  return {
    descripcion: bebida.getDescripcion(),
    precio: bebida.getPrecio()
  };
}

module.exports = { aplicarEstrategias };
