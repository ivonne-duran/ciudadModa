import React from "react";
import "../comunes/colores.css";
import Etiqueta from "../Etiqueta/Etiqueta";
import { Col, Form, FormGroup, Input } from "reactstrap";

const Numero = ({ texto, nombre, mensaje, handleChange }) => {
  return (
    <Form>
      <FormGroup row>
        <Col sm={4}>
          <Etiqueta para={nombre} texto={texto} />
        </Col>
        <Col sm={8}>
          <Input
            className="borde-naranja"
            type="number"
            name={nombre}
            id={nombre}
            placeholder={mensaje}
            onKeyUp={handleChange}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Numero;
