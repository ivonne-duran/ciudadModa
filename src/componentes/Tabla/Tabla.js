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
                        <th>
                            Período
                        </th>
                        <th>
                            Depreciación
                        </th>
                        <th>
                            Depreciación Acumulada
                        </th>
                        <th>
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