import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Encabezado from "../Encabezado/Encabezado";

const BarraNavegacion = () => {
    return(
        <>
        <div>
            <Encabezado />
            <Nav justified>
                <NavItem>
                    <NavLink href="/lineaRecta">
                        Línea Recta
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/acelerada">
                        Depreciación Acelerada
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/porUso">
                        Por Uso
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        </>
    )
}

export default BarraNavegacion;