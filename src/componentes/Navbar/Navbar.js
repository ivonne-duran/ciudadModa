import React from "react";
import logo from "./logoCM.png";
import { Col, Container, Row } from "reactstrap";
import "../comunes/colores.css";

const Navbar = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <h5 className="color-azul">Ciudad de la moda</h5>
        </Col>
        <Col xs={6} md={5}>
          <h1 className="color-azul">DEPRECIACIÓN CONTABLE</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
