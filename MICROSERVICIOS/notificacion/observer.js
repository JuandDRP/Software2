class Notificador {
    constructor(tipo) {
      this.tipo = tipo;
    }
    update(mensaje) {
      console.log(`[${this.tipo}] Notificación: ${mensaje}`);
    }
  }
  
  module.exports = [
    new Notificador('Push'),
    new Notificador('Email'),
    new Notificador('SMS')
  ];
  