class BebidaBase {
    constructor() {
      this.descripcion = 'Bebida genérica';
      this.precio = 0;
    }
  
    getDescripcion() {
      return this.descripcion;
    }
  
    getPrecio() {
      return this.precio;
    }
  }
  
  module.exports = BebidaBase;
  