const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;

  fetch('/nuevo-usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      password: password
    })
  })
  .then(response => {
    // hacer algo con la respuesta del servidor
  })
  .catch(error => {
    console.error(error);
  });
});
