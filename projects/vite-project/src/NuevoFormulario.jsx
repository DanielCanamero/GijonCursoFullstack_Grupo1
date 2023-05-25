import React, { useState } from 'react';

const AyudaFormulario = () => {
  const [titulo, setTitulo] = useState('');
  const [consulta, setConsulta] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleConsultaChange = (event) => {
    setConsulta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para enviar la solicitud de ayuda a los administradores

    // Luego de enviar la solicitud, puedes limpiar los campos
    setTitulo('');
    setConsulta('');
  };

  return (
    <div>
      <h2 style={{ backgroundColor: 'blue', color: 'white' }}>¿Necesitas ayuda?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={handleTituloChange} />
        </div>
        <div>
          <label>Consulta:</label>
          <textarea value={consulta} onChange={handleConsultaChange} />
        </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>Enviar</button>
      </form>
    </div>
  );
};

export default AyudaFormulario;
