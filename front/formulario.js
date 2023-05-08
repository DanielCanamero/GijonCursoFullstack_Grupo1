const form = document.querySelector('#formulario');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nombres = document.querySelector('#nombres').value;
  const apellidos = document.querySelector('#apellidos').value;
  const email = document.querySelector('#email').value;

  try {
    const response = await fetch('/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombres, apellidos, email })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
