
function retraso(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function onGuardaPerfil() {
  // alert("entro guarda");
  const miTitulo = document.getElementById("mensaje");
  const nuevoEmail = document.getElementById("datoEmail").value;
  //alert(nuevoEmail);
  const nuevoNick = document.getElementById("datoNick").value;
  //alert(nuevoNick);
  const nuevaPwd = document.getElementById("datoPwd").value;
  //alert(nuevaPwd);
  const nuevaPwdBis = document.getElementById("datoPwdBis").value;
  //alert(nuevaPwdBis);

  miTitulo.textContent = "Comprobando datos...";
  if ((nuevoEmail==="") || (nuevoEmail===null)) { miTitulo.textContent = "Error: el E-mail es obligatorio"; return;};
  if ((nuevoNick==="") || (nuevoNick===null)) { miTitulo.textContent = "Error: el Nick es obligatorio"; return;};
  if ((nuevaPwd==="") || (nuevaPwd===null)) { miTitulo.textContent = "Error: la contraseña es obligatoria"; return;};
  if ((nuevaPwdBis==="") || (nuevaPwdBis===null)) { miTitulo.textContent = "Error: la repetición de la contraseña es obligatoria"; return;};
  if (nuevaPwd!==nuevaPwdBis) {miTitulo.textContent = "Error: la contraseña y su repetición son distintas";  return;};
  await retraso(1500);      // simulamos pausa

  miTitulo.textContent = "Creando cuenta...";
  //PENDIENTE: comprobacion e-mail y nick no existen ya
  //PENDIENTE: grabacion datos nueva cuenta
  await retraso(2000);      // simulamos pausa

  miTitulo.textContent = "Cuenta creada. Redirigiendo...";
  //PENDIENTE: inicializacion de web con usuario activo
  await retraso(1500);      // simulamos pausa
  window.open("./principal_main.html", "_self");
}

async function onCancelaPerfil() {
  // alert("entro cancel");
  const miTitulo = document.getElementById("mensaje");
  miTitulo.textContent = "Redirigiendo...";
  await retraso(1000);
  window.open("./ingreso_login.html", "_self");
}