const sequelize = require("./conexion.js");

async function insertRows() {
  let array_insert = ["Daniel", "Cañamero", "danielcanamero97@gmail.com"];

  sequelize
    .query(
      "INSERT INTO `users` (`nombres`,`apellidos`,`email`) VALUES (?,?,?)",
      { replacements: array_insert, type: sequelize.QueryTypes.INSERT }
    )
    .then(function (proyecto) {
      console.log(proyecto);
    });
}

insertRows();
