import React from "react";
import { Container, Table } from "reactstrap";
import Fila from "../Fila/Fila";
import "../comunes/colores.css"

const Tabla = ({filas}) => {
    return(
        <Container>
            <Table hover className="color-naranja">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>
                            Período
                        </th>
                        <th style={{textAlign:"end"}}>
                            Depreciación
                        </th>
                        <th style={{textAlign:"end"}}>
                            Depreciación Acumulada
                        </th>
                        <th style={{textAlign:"end"}}>
                            Valor en Libros
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filas?.map( (fila, index) =>
                            <Fila fila={fila} key={index}/>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default Tabla;