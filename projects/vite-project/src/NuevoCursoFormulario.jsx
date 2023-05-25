import React, { useState } from "react";
import NuevoCurso from "./NuevoCurso";

function NuevoCursoFormulario(props) {
  const [cursos, setCursos] = useState([]);

  const handleNuevoCurso = (nuevoCurso) => {
    setCursos([...cursos, nuevoCurso]);
  };

  return (
    <div>
      <NuevoCurso onNuevoCurso={handleNuevoCurso} />
      <ul>
        {cursos.map((curso, index) => (
          <li key={index}>{curso.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default NuevoCursoFormulario;
