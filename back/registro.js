const express = require("express");
const app = express();
const Sequelize = require('sequelize');


app.use(express.urlencoded({extended: true}));

app.post("/form", (req, res) => {
    const {nombres, email} = req.body;
    res.send("Hola gracias!")
});

app.listen(3000, () =>{
    console.log("servidor iniciado en el puerto 3000 bien!")
})

//Registro
app.post("/registro", async (req, res) =>{
    const {nombres, apellidos, email, username, password, foto, fecha_nac, 
            idiomas, estudios, hobbies, pais_nac, fecha_reg } = req.body;
    
    //verificacion de username
    const usernameExists = await sequelize.query(`SELECT * FROM users WHERE username = ?`, {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT
    });

    //verificacion de email
    const emailExists = await sequelize.query(`SELECT * FROM users WHERE email = ?`, {
        replacements: [email],
        type: sequelize.QueryTypes.SELECT
    });

    if (usernameExists.length > 0 && emailExists.length > 0) {
        //si existe un usuario con mismo username y email, mensaje de error
        res.status(400).json({message: "Ya hay un usuario con el mismo Email y Username." });
    } else if (usernameExists.length > 0) {
        //username en uso
        res.status(400).json({message: "Ya hay un usuario con el mismo Username." });
    } else if (emailExists.length > 0) {
        //email en uso
        res.status(400).json({message: "Ya hay un usuario con el mismo Email." });
    } else {
        //si no se repiten username y email, se crea un usuario en la base de datos
        const newUser = await sequelize.query(`INSERT INTO users (nombres, apellidos, email, username, password, foto, fecha_nac, idiomas, estudios, hobbies, pais_nac, fecha_reg)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,)`, {
            replacements:[nombres, apellidos, email, username, password, foto, fecha_nac, idiomas, estudios, hobbies, pais_nac, fecha_reg],
            type: sequelize.QueryTypes.INSERT
        });
        
        res.json({ message: "usuario creado satisfactoriamente."});
    }
});
