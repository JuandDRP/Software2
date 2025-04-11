const BebidaBase = require('../BebidaBase');

class Te extends BebidaBase {
  constructor() {
    super();
    this.descripcion = 'Té';
    this.precio = 4;
  }
}

module.exports = Te;
