import './App.css';
import Texto from './componentes/Texto/Texto';
import Numero from './componentes/Numero/Numero';
import { Container } from 'reactstrap';
import Articulo from './componentes/comunes/objetos/articulo';
import * as calculos from "./componentes/procesos/calcular"
import Tabla from './componentes/Tabla/Tabla';

function App() {
  let articulo = new Articulo(10000,200,5);
  return (
    <div className="App">
      <Container>
        { /* Este es solo un ejemplo de como usar los controles */ }
        <Texto texto={"Nombre Articulo"} mensaje={"Digite el nombre del articulo"} nombre={"nombreArticulo"} />
        <Numero texto={"Valor del Articulo"} mensaje={"Valor del articulo"} nombre={"valorArticulo"} />
        <Texto texto={"Descripción del articulo"} mensaje={"Agregue una descripcion del articulo"} nombre={"descripcionArticulo"} />
        <Tabla filas={calculos.depreciacionAcelerada(articulo)} />
      </Container>
    </div>
  );
}

export default App;
