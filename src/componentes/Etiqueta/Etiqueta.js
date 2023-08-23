import React from "react";
import { Label } from "reactstrap";
import "../comunes/colores.css";

const Etiqueta = ({texto, para}) => {
    return (
        <div>
            <Label className="color-naranja" for={para}>
                {texto}
            </Label>
        </div>
    );
}

export default Etiqueta;