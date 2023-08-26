import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import PropTypes from 'prop-types';

function Opciones({ direction, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen((prevState) => !prevState);
  
    return (
      <div>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle caret>Metodos de calculo de depreciacion</DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem header>Metodos de depreciacion aceptados</DropdownItem>
            <DropdownItem>Línea Recta</DropdownItem>
            <DropdownItem>Acelerada Decreciente</DropdownItem>
            <DropdownItem>Por Uso</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  Opciones.propTypes = {
    direction: PropTypes.string,
  };

  export default Opciones;