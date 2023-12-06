import logo from './logo.svg';
import './App.css';
import BannerImage from './components/BannerImage';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Novedades from './components/Novedades';

function App() {
  return (
    <div className="App">
	  <MenuBar/>
	  <BannerImage/>
	  <br/>
	  <p className="map-title" align="center">COMO ES LA HACKATHON</p>
	  <img src="/images/linea1.png"/>
	  <div className="texto-comun">Es una actividad para aprender sobre Google Cloud y divertirse. <br/> Se arman equipos de hasta 3 personas donde deben cumplir con una serie de desafios con distintas tematicas (Arquitectura, Observabilidad, Seguridad, ML/IA). <br/> Cada desafio implica resolver un laboratorio sobre un ambiente de GCP. <br/>
	  Cada ganador de cada desafio se va a apoderar de una region del mundo. Quien domine mas regiones al final de la actividad sera el ganador final de Games of Cloud.
	  </div>
	  <br/>
	  <p className="map-title" align="center">QUE SE NECESITA PARA PARTICIPAR</p>
	  <img src="/images/linea1.png"/>
	  <div className="texto-comun">Para empezar, muchas ganas y buena onda. <br/>
	  Despues tenes que tener tu equipo. Y un dia determinado te invitamos a Google Argentina para participar de la competencia. <br/>
	  Te venis con la laptop y ya estas listo para el combate. <br/>
	  </div>
	  <br/>
	  <p className="map-title" align="center">NEWS</p>
              <img src="/images/linea1.png"/>
	  <br/>
	  <Novedades/>
    </div>
  );
}

export default App;
