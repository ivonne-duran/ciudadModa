import './App.css';
import Texto from './componentes/Texto/Texto';
import Numero from './componentes/Numero/Numero';
import Navbar from './componentes/Navbar/Navbar';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        { /* Este es solo un ejemplo de como usar los controles */ }
        <Navbar/>
        <Texto texto={"Nombre Articulo"} mensaje={"Digite el nombre del articulo"} nombre={"nombreArticulo"} />
        <Numero texto={"Valor del Articulo"} mensaje={"Valor del articulo"} nombre={"valorArticulo"} />
        <Texto texto={"Descripción del articulo"} mensaje={"Agregue una descripcion del articulo"} nombre={"descripcionArticulo"} />
      </Container>
    </div>
  );
}

export default App;
