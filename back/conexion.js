const Sequelize = require("sequelize");
const path = "mysql://root@localhost:3306/enredando";
const sequelize = new Sequelize(path);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.error("Error de conexión:", err);
  });

module.exports = sequelize;
