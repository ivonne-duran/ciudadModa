import React from "react";
import "../comunes/colores.css";

const Fila = ({fila}) => {
    var format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    return(
        <tr className="color-naranja">
            <th scope="row" style={{textAlign:"center"}}>{fila.periodo}</th>
            <th scope="row" style={{textAlign:"end"}}>{format.format(fila.depreciacion)}</th>
            <th scope="row" style={{textAlign:"end"}}>{format.format(fila.depreciacionAcumulada)}</th>
            <th scope="row" style={{textAlign:"end"}}>{format.format(fila.valorEnLibro)}</th>
        </tr>
    )
}

export default Fila;