import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from "reactstrap";
import Numero from "../Numero/Numero";
import Tabla from "../Tabla/Tabla";
import "../comunes/colores.css";
import Articulo from "../comunes/objetos/articulo.js"
import { depreciacionPorHora, depreciacionPorUso } from "../procesos/calcular.js"
import BarraNavegacion from "../BarraNavegacion/BarraNavegacion"

const PorUso = () => {
    const [filas, actualizarFilas] = useState(null)
    const [tasaDepreciacion, actualizarTasa] = useState(0)
    var format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    const calcular = () => {
        let valor = document.getElementById("valorArticulo").value
        let residual = document.getElementById("valorResidualArticulo").value
        let vida = document.getElementById("vidaUtil").value
        let usoPromedio = document.getElementById("promedioUso").value
        let art = new Articulo(valor, residual, vida, usoPromedio)
        
        actualizarFilas(depreciacionPorUso(art))
        actualizarTasa(depreciacionPorHora(art))
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
                                    <h4 className="color-naranja" style={{textAlign:"center"}}>Depreciación Por Uso del Activo</h4>
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
                                    <Numero texto={"Vida util del articulo (años)"} mensaje={"Digite la vida util del articulo (años)"} nombre={"vidaUtil"} />
                                    <Numero texto={"Promedio de uso anual (horas)"} mensaje={"Digite el promedio de uso anual (horas)"} nombre={"promedioUso"} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button className="fondo-amarillo" onClick={() => calcular()}>Calcular</Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            {
                                tasaDepreciacion > 0 ? 
                                    <Row>
                                        <Col>
                                            <Label>Depreciación por hora: {format.format(tasaDepreciacion)} </Label>
                                        </Col>
                                    </Row>
                                : <></>
                            }
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



export default PorUso