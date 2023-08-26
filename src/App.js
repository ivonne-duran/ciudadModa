import './App.css';
import Texto from './componentes/Texto/Texto';
import Numero from './componentes/Numero/Numero';
import Navbar from './componentes/Navbar/Navbar';
import Tabla from './componentes/Tabla/Tabla';
import { Col, Container, Row } from 'reactstrap';
import Articulo from './componentes/comunes/objetos/articulo';
import { lineaRecta } from './componentes/procesos/calcular';

function App() {
  let articulo = new Articulo(12000, 2500, 6);
  return (
    <div className="App">
      <Container>
        <br/>
        <Row>
          <Navbar/>
        </Row>
        <br/>
        <Row>
          <Col>
            <Texto texto={"Nombre Articulo"} mensaje={"Digite el nombre del articulo"} nombre={"nombreArticulo"} />
            <Numero texto={"Valor del Articulo"} mensaje={"Valor del articulo"} nombre={"valorArticulo"} />
            <Texto texto={"Descripción del articulo"} mensaje={"Agregue una descripcion del articulo"} nombre={"descripcionArticulo"} />
          </Col>
          <Col>
            <Texto texto={"prueba"} mensaje={"Prueba"} nombre={"prueba"}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabla filas={lineaRecta(articulo)}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
