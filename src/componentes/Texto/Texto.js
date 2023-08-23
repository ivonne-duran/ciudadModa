import React from "react";
import "../comunes/colores.css";
import Etiqueta from "../Etiqueta/Etiqueta";
import { FormGroup, Input } from "reactstrap";

const Texto = ({texto, nombre, mensaje}) => {
    return(
        <FormGroup>
            <Etiqueta para={nombre} texto={texto}/>
            <Input type="text" name={nombre} placeholder={mensaje} className="borde-naranja"/>
        </FormGroup>
    );
}

export default Texto;