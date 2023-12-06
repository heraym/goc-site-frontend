import React from 'react';
import './master.css';


class Equipo extends React.Component {

render() { 

  return (  
             <div className="tableEquipos">
	      <div className="row">
	       <span className="cell"><img src={this.props.equipo.bandera}/></span>
	      </div>
	      <div className="row">
	        <span className="cell">
	          <div className="tableIntegrantes">
	            <div className="row">
	               <span className="cell"><p className="map-title">INTEGRANTES</p></span>
	            </div>
	            
	  {     
		this.props.equipo.integrantes.map((integrante, index) => {		 
	
		  return <div className="row" key={index}>
	             <span className="cell integrante">{integrante.nombre}</span></div>
	         })
	  }
	         </div>
	        </span>
	      </div>
	      <div className="row">
	      <span className="cell nombreEquipo"><img width="300px" src="/images/linea1.png"/></span></div>
	      <div className="row">
	      <span className="cell nombreEquipo"><p className="map-title">{this.props.equipo.nombre}</p></span></div> 
	      </div>
   
  )

}     

}

export default Equipo;

