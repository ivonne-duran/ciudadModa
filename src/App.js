import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import { Col, Container, Row } from 'reactstrap';
import LineaRecta from './componentes/LineaRecta/LineaRecta';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion';

function App() {
  return (
    <div className="App">
      <Container>
        <br/>
        <Row>
          <Col>
            <Encabezado/>
          </Col>
        </Row>
        <Row>
          <Col>
            <BarraNavegacion />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <LineaRecta/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
