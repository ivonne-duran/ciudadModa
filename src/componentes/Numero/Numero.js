import React from "react";
import "../comunes/colores.css";
import Etiqueta from "../Etiqueta/Etiqueta";
import { FormGroup, Input } from "reactstrap";

const Numero = ({texto, nombre, mensaje}) => {
    return(
        <FormGroup>
            <Etiqueta para={nombre} texto={texto}/>
            <Input className="borde-naranja" type="number" name={nombre} placeholder={mensaje}/>
        </FormGroup>
    );
}

export default Numero;