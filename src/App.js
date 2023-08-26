import './App.css';
import Numero from './componentes/Numero/Numero';
import Navbar from './componentes/Navbar/Navbar';
import Tabla from './componentes/Tabla/Tabla';
import { Col, Container, Row } from 'reactstrap';
import Articulo from './componentes/comunes/objetos/articulo';
import { lineaRecta } from './componentes/procesos/calcular';
import Opciones from './componentes/Opciones/Opciones';

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
            <h3 className='color-naranja'>Datos del articulo</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Numero texto={"Valor del Articulo"} mensaje={"Digite el valor de compra del articulo"} nombre={"valorArticulo"} />
            <Numero texto={"Valor Residual del Articulo"} mensaje={"Digite el valor del articulo al finalizar su vida util"} nombre={"valorResidualArticulo"} />
            <Numero texto={"Vida util del articulo"} mensaje={"Vida util del articulo (en años)"} nombre={"vidaUtil"} />
            <Numero texto={"Horas de uso"} mensaje={"Promedio de horas de uso por año"} nombre={"uso"} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Opciones/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabla />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
