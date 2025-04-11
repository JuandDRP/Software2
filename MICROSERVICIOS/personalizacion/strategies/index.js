module.exports = {
    conLeche: bebida => ({ ...bebida, descripcion: bebida.descripcion + ' con leche' }),
    sinAzucar: bebida => ({ ...bebida, descripcion: bebida.descripcion + ' sin azúcar' }),
    lecheAlmendra: bebida => ({ ...bebida, descripcion: bebida.descripcion + ' con leche de almendra' })
  };