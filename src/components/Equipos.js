import React from 'react';
import './master.css';
import Equipo from "./Equipo";
import MenuBar from "./MenuBar";

class Equipos extends React.Component {

state = { equipos : []};

componentDidMount() {

	// this.setState({ equipos: [{ nombre: "Los gladiadores", bandera: "/images/bandera-azul.png", color: "azul", integrantes: [ { nombre: "Mick Jagger"}, { nombre: "Michael Jackson"}]}, { nombre: "Somos Unicos", color: "amarillo", bandera: "/images/bandera-amarilla.png" , integrantes: [ { nombre: "Juan Perez"}, { nombre: "Pablo Lopez"}]}, { nombre: "Geniales", color: "verde", bandera: "/images/bandera-verde.png", integrantes: [ { nombre: "Juan Perez"}, { nombre: "Pablo Lopez"}]},    { nombre: "Los mejores", color: "rojo", bandera: "/images/bandera-roja.png", integrantes: [{ nombre: "Juan Perez"}, { nombre: "Pablo Lopez"}]}    ]});
 
 this.callBackendAPI()
          .then(res => {this.setState({ equipos : res }) })
          .catch(err => console.log(err));
      }
        // fetching the GET route from the Express server which matches the GET route from server.js
      callBackendAPI = async () => {
        //const FIXTUREBACKENDURL = process.env.REACT_APP_FIXTUREBACKENDURL;
        const response = await fetch('https://hackathon-backend-xcowfeupla-uc.a.run.app' + '/equipos');
        const body = await response.json();
        
        if (response.status !== 200) {
          console.log("Error:" + body.message);
          throw Error(body.message) 
        }
        
	return body;
      };



render() { 

  return (  
            <div className="App">
              <MenuBar/>
	      <div className="banner-container">
              <img src="/images/map_banner.png"/>
                <div className="banner-text">Hay que ser muy valiente para ser uno de los conquistadores de este juego.<br/>
Aqui tienes cada equipo, con sus aguerridos integrantes que se lanzan en cada desafio para apoderarse del Mundo<br/>
Observa detenidamente para estar seguro de a quien te vas a enfrentar.
</div>
              </div>
	      <p className="map-title" align="center">EQUIPOS</p>
	      <img src="/images/linea1.png"/>
	      <br/>
	      <div className="grupoEquipos">
	       { 
		  this.state.equipos.map((equipo, index) => {
                return <Equipo equipo={equipo} key={index}/> })
	       }
	      </div>
   
     </div>
  )

}

}     


export default Equipos;

