import React from 'react';
import { Title } from '../styles/globalStyles';

const List = () => {

  var values = localStorage.getItem("formValues");
  var studentList = JSON.parse(values);

  return (
    <>
      <Title>Listado de estudiantes</Title>
      {studentList?.map((i) => (
        <ul>
          <li>Nombre: {i.name} {i.lastName}</li>
          <li>Edad: {i.age}</li>
          <li>Género: {i.gender}</li>
        </ul>
      ))}
    </>
  );
}

export default List;