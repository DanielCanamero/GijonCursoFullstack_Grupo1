const Sequelize = require("sequelize");
const path = "mysql://enredando:enredando@localhost:3306/enredando";
const sequelize = new Sequelize(path, { operatorsAliases: 0 });

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });

module.exports = sequelize;
