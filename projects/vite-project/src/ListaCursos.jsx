import React from "react";

function ListaCursos(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del curso</th>
          <th>Lugar</th>
          <th>Fecha de inicio</th>
          <th>Fecha de fin</th>
        </tr>
      </thead>
      <tbody>
        {props.cursos.map((curso, index) => (
          <tr key={index}>
            <td>{curso.nombre}</td>
            <td>{curso.lugar}</td>
            <td>{curso.fechaInicio}</td>
            <td>{curso.fechaFin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaCursos;