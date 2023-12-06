import React from 'react';
import './master.css';

class EquipoGanador extends React.Component {

    render() {

      if (this.props.ganador != "") { 
                 return <div className={this.props.region}><img src={this.props.imagen}/><span className="tooltiptext">{this.props.equipo}</span></div>} else { return <div/> }
}

}
export default EquipoGanador;
