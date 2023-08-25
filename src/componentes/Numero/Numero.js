import React from "react";
import "../comunes/colores.css";
import Etiqueta from "../Etiqueta/Etiqueta";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const Numero = ({ texto, nombre, mensaje }) => {
  return (
    <Form>
      <FormGroup row>
        <Label sm={2}>
          <Etiqueta para={nombre} texto={texto} />
        </Label>
        <Col sm={4}>
          <Input
            className="borde-naranja"
            type="number"
            name={nombre}
            placeholder={mensaje}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Numero;
