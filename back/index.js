const express = require("express");
const app = express();
const sequelize = require("./conexion.js");
const cors = require("cors");
app.use(cors());

async function findAllRows() {
  sequelize
    .query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
    .then(function (users) {
      console.log(users);
    });
}

app.get("/users", async function (req, res) {
  try {
    const users = await sequelize.query("SELECT * FROM users", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("error del servidor");
  }
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html"); // envía el archivo HTML
});

app.listen(3000, function () {
  console.log("Sistema funcionando en el puerto 3000");
});

findAllRows();
