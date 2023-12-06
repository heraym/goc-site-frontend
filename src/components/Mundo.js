import React from 'react';
import './master.css';
import EquipoGanador from "./EquipoGanador";
import MenuBar from "./MenuBar";

class Mundo extends React.Component {

state = { region1 : ""};

componentDidMount() {
    this.setState({ region1 : "azul", equipo1: "Los gladiadores", imagen1: "/images/equipo-azul.png",
                    region2 : "rojo", equipo2: "Los genios", imagen2: "/images/equipo-rojo.png",
                    region3 : "verde", equipo3: "Grandes", imagen3: "/images/equipo-verde.png",
                    region4: "amarillo", equipo4: "Somos Unicos",  imagen4: "/images/equipo-amarillo.png",
                    region5: "rojo" , equipo5: "Los genios",  imagen5: "/images/equipo-rojo.png",
                    region6: "amarillo", equipo6: "Somos Unicos", imagen6: "/images/equipo-amarillo.png"});
 }


render() { 

  return (  
            <div className="App">
	      <MenuBar/>
              <div className="banner-container">
              <img src="/images/map_banner.png"/>
                <div className="banner-text">Para ser el Master de Games of Cloud debes conquistar cada una de las regiones de este mundo.<br/>
Quien supere cada desafio, conquistara una region y estara mas cerca de ganar la competencia.<br/>
Aqui puedes ver como vas, que regiones tiene cada equipo y que te falta para apoderarte del juego.</div>
              </div>
	      <p className="map-title" align="center">MAPA</p>
	      <img src="/images/linea1.png"/>
	      <div className="map-container">
	      <div className="warrior"><img src="/images/warrior.png"/></div>
	      <div className="region1-c"><img src="/images/region-1.png"/></div>
	   	<EquipoGanador region="region1" ganador={this.state.region1} imagen={this.state.imagen1} equipo={this.state.equipo1} />
   	     <div className="region2-c"><img src="/images/region-2.png"/></div>
	  <EquipoGanador region="region2" ganador={this.state.region2} imagen={this.state.imagen2} equipo={this.state.equipo2}/>
	      <div className="region3-c"><img src="/images/region-3.png"/></div>
	  <EquipoGanador region="region3" ganador={this.state.region3} imagen={this.state.imagen3} equipo={this.state.equipo3} />
	      <div className="region4-c"><img src="/images/region-4.png"/></div>
	  <EquipoGanador region="region4" ganador={this.state.region4} imagen={this.state.imagen4} equipo={this.state.equipo4} />
	      <div className="region5-c"><img src="/images/region-5.png"/></div>
	  <EquipoGanador region="region5" ganador={this.state.region5} imagen={this.state.imagen5} equipo={this.state.equipo5} />
	      <div className="region6-c"><img src="/images/region-6.png"/></div>
	     
	  <EquipoGanador region="region6" ganador={this.state.region6} imagen={this.state.imagen6} equipo={this.state.equipo6} />
	     </div> <p className="map-title" align="center">REGIONES</p>
	     <img src="/images/linea2.png"/>
             <table className="tabla-regiones"><tr><td> 1 - ARQUITECTURA </td><td> 2 - OBSERVABILIDAD </td></tr><tr><td>3 - AI & ML </td>
	  <td> 4 - SEGURIDAD </td></tr></table>
       
 
   
     </div>
  )

}

}     


export default Mundo;

