import React, { useState } from "react";

function NuevoCurso() {
  const [nombre, setNombre] = useState("");
  const [lugar, setLugar] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se podría enviar la información a un servidor o hacer algo con ella
    console.log({ nombre, lugar, fechaInicio, fechaFin });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="nombre">Nombre del curso:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lugar">Lugar donde se realizó:</label>
        <input
          type="text"
          id="lugar"
          value={lugar}
          onChange={(event) => setLugar(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="fecha-inicio">Fecha de comienzo:</label>
        <input
          type="date"
          id="fecha-inicio"
          value={fechaInicio}
          onChange={(event) => setFechaInicio(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="fecha-fin">Fecha de finalización:</label>
        <input
          type="date"
          id="fecha-fin"
          value={fechaFin}
          onChange={(event) => setFechaFin(event.target.value)}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
    
  );
}

export default NuevoCurso;
