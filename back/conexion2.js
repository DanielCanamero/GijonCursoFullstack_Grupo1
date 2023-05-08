const Sequelize = require('sequelize');

const conexion = new Sequelize('enredando', 'enredando', 'enredando', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = conexion;