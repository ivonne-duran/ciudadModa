import React from "react";
import { Table } from "reactstrap";

const Tabla = () => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Código</th>
          <th>Período</th>
          <th>Costo</th>
          <th>Valor depreciable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
        </tr>
        <tr>
          <th scope="row">2</th>
        </tr>
        <tr>
          <th scope="row">3</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tabla;
