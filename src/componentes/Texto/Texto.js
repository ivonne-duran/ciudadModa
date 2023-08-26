import React from "react";
import "../comunes/colores.css";
import Etiqueta from "../Etiqueta/Etiqueta";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const Texto = ({ texto, nombre, mensaje }) => {
  return (
    <Form>
      <FormGroup row>
        <Label sm={5}>
          <Etiqueta para={nombre} texto={texto} />
        </Label>
        <Col sm={7}>
          <Input
          type="text"
          name={nombre}
          placeholder={mensaje}
          className="borde-naranja"
        />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Texto;
