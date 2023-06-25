import React, { useState, useEffect } from "react";
import { CustomButton, CustomInput, CustomForm, Title, SubTitle, WrapLink } from "../styles/globalStyles";
import { Link } from "react-router-dom";

const Form = () => {

  const [initialValues, setInitialValues] = useState(
    {
      name: "",
      lastName: "",
      age: "",
      gender: "",
    },
  );
  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = () => {
    setFormValues(() => [initialValues]);
  };

  const values = initialValues.gender && initialValues.age && initialValues.lastName && initialValues.name;

  return (
    <>
      <Title>PORTAL EDUCATIVO</Title>
      <SubTitle>INGRESE LOS DATOS DEL ESTUDIANTE:</SubTitle>
      <CustomForm>
        <div>
          <CustomInput
            type="text"
            placeholder="Nombre:"
            value={initialValues.name}
            onChange={(e) => setInitialValues({ ...initialValues, name: e.target.value })}
          />
        </div>
        <div>
          <CustomInput
            type="text"
            placeholder="Apellido:"
            value={initialValues.lastName}
            onChange={(e) => setInitialValues({ ...initialValues, lastName: e.target.value })}
          />
        </div>
        <div>
          <CustomInput
            type="number"
            placeholder="Edad:"
            value={initialValues.age}
            onChange={(e) => setInitialValues({ ...initialValues, age: e.target.value })}
          />
        </div>
        <div>
          <CustomInput
            placeholder="Género:"
            value={initialValues.gender}
            onChange={(e) => setInitialValues({ ...initialValues, gender: e.target.value })}
          />
        </div>
        {values ? <CustomButton variant="contained" onClick={onSubmit}>Enviar</CustomButton> : <CustomButton disabled variant="contained">Enviar</CustomButton>}
        <WrapLink><Link to="/edit">Editar datos</Link></WrapLink>
      </CustomForm>
    </>
  );
};

export default Form;
