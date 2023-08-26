import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Numero from "../Numero/Numero";
import Tabla from "../Tabla/Tabla";
import "../comunes/colores.css";
import Articulo from "../comunes/objetos/articulo.js"
import { lineaRecta } from "../procesos/calcular.js"

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
            <Card>
                <CardHeader>
                    <h4 className="color-naranja">Líne Recta</h4>
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
        </>
    )
}



export default LineaRecta