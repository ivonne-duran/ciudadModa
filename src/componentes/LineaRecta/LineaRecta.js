import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Numero from "../Numero/Numero";
import Tabla from "../Tabla/Tabla";
import "../comunes/colores.css";
import Articulo from "../comunes/objetos/articulo.js"
import { lineaRecta } from "../procesos/calcular.js"
import BarraNavegacion from "../BarraNavegacion/BarraNavegacion";

const LineaRecta = () => {
    const [filas, actualizarFilas] = useState(null)

    const calcular = () => {
        let valor = document.getElementById("valorArticulo").value
        let residual = document.getElementById("valorResidualArticulo").value
        let vida = document.getElementById("vidaUtil").value
        let art = new Articulo(valor, residual, vida)
        actualizarFilas(lineaRecta(art))
    }

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <BarraNavegacion />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col>
                                    <h4 className="color-naranja" style={{textAlign:"center"}}>Línea Recta</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className='color-naranja'>Datos del articulo</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Numero texto={"Valor del Articulo"} mensaje={"Digite el valor de compra del articulo"} nombre={"valorArticulo"} />
                                    <Numero texto={"Valor Residual del Articulo"} mensaje={"Digite el valor del articulo al finalizar su vida util"} nombre={"valorResidualArticulo"} />
                                    <Numero texto={"Vida util del articulo"} mensaje={"Vida util del articulo (en años)"} nombre={"vidaUtil"} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button className="fondo-amarillo" onClick={() => calcular()}>Calcular</Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Tabla filas={filas}/>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}



export default LineaRecta