const dotenv = require('dotenv');
dotenv.config();


const express = require("express");
const app = express();
const sequelize = require("./conexion.js");
const cors = require("cors");
app.use(cors());
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = ('express-jwt');

const jwtClave = ('clave_deseada')
app.use(express.static('publica'));
app.use(bodyParser.json());

const usuario = [{
    nombre: "user",
    clave: "password"
}];

app.post("/login", function(request, response){
    if(request.body.name == usuario.nombre || request.body.clave == usuario.clave){
        var token = jwt.sign({ usuario: "usuario"}, jwtClave);

        response.send(token);
    }else{
        response.status(401).end('Usuario incorrecto');
    }
})

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
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function () {
  console.log("Sistema funcionando en el puerto 3000");
});

findAllRows();
