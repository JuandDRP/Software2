const BebidaBase = require('../BebidaBase');

class Cafe extends BebidaBase {
  constructor() {
    super();
    this.descripcion = 'Café';
    this.precio = 5;
  }
}

module.exports = Cafe;
