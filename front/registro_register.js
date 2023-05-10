const form = document.getElementById("form-registro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // const foto = document.getElementById("foto").value;
    // const fecha_nac = document.getElementById("fecha_nac").value;
    // const idiomas = document.getElementById("idiomas").value;
    // const estudios = document.getElementById("estudios").value;
    // const hobbies = document.getElementById("hobbies").value;
    // const pais_nac = document.getElementById("pais_nac").value;
    // const fecha_reg = document.getElementById("fecha_reg").value;
    // const terms = document.getElementById("terms").checked;

    // if (!terms){
    //     alert("Debe aceptar los términos y condiciones para continuar.");
    //     return;
    // }

    //     const emailRegex = /^[^\s@]+@[^\s@]+\[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //     alert("Debe ingresar un email válido para continuar.");
    //     return;
    // }

    if (password.length < 6 || password.length > 20) {
        alert("La contraseña debe tener entre 6 y 20 caracteres");
        return;
    }

    // if (!alias || !nombres || !apellidos || !email || !username || !password || !fecha_nac) {
    //     alert("Debe tener completos los siguientes campos: nombres, apellidos, email, username, contraseña y fecha de nacimiento.");
    //     return;
    // }

    try {
        const response = await fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombres: nombres,
                apellidos: apellidos,
                email: email,
                username: username,
                password: password,
            })
        });

        const data = await response.json();

        if (data.message === 'Usuario agregado correctamente') {
            alert(data.message);
            
            window.location.href = "login.html";
           
        } else {
            alert("Error al crear usuario");
        }
    } catch (error){
        console.error(error);
        alert("Ha ocurrido un error al crear usuario");
    }
});