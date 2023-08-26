import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { Col, Container, Row } from 'reactstrap';
import LineaRecta from './componentes/LineaRecta/LineaRecta';

function App() {
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
            <LineaRecta/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
