// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { insertUser } = require('../front/formulario.js');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(cors());

// //Crear una ruta que maneje las solicitudes POST para agregar un nuevo usuario
// app.post('/usuarios', async function (req, res) {
//   try {
//     const { nombres, apellidos, email } = req.body;

//     await insertUser(nombres, apellidos, email);

//     res.status(201).send('Usuario agregado correctamente');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error del servidor');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor iniciado en el puerto ${PORT}`);
// });
