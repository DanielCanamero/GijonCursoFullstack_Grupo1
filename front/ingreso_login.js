/// simulacion de login con JS

function retraso(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let intentos = 3;

async function compruebaLogin() {
    // alert("hola mundo desde compuebaLogin()");
    let ok = false;
    const usuario = document.getElementById("username").value;
    const pwd = document.getElementById("pwd").value;
    // alert(usuario+"/"+pwd);
    const miTitulo = document.getElementById("mensaje");

    // comprobaciones
    if ((usuario === "") && (pwd === "")) { return false; }     // si pulsa el boton sin meter datos no hacemos nada, salimos
    if (intentos == 0) { return false; }                        // si agoto los intentos no hacemos nada, salimos

    await retraso(1000); //esperamos 1s
    miTitulo.textContent = "Comprobando acceso...";

    // simulacion de chequeo de datos contra db PENDIENTE
    if ((usuario === "TheMaster") && (pwd === "TheMaster")) { ok = true; }
    if ((usuario === "Maria") && (pwd === "maria")) { ok = true; }
    if ((usuario === "Dani") && (pwd === "dani")) { ok = true; }
    if ((usuario === "Victor") && (pwd === "victor")) { ok = true; }

    if (ok) {
        // alert("datos correctos"); 
        miTitulo.textContent = "Acceso permitido. Entrando...";
        await retraso(1500); //esperamos un poco
        // cargar pagina main
        window.open("principal_main.html", "_self")
    }
    else {
        // alert("datos incorrectos");
        await retraso(3000);
        intentos = intentos - 1;
        if (intentos == 0) miTitulo.textContent = "Demasiados errores. Acceso denegado.";
        else miTitulo.textContent = "Datos de acceso incorrectos. Te quedan " + intentos + " intentos.";
    }

    return ok;
}