import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './master.css';


class Novedades extends React.Component {

  render() { 

    return ( <div className="carousel-container">
	    <Carousel>
          <Carousel.Item>
          <img
          className="d-block w-100"
          src="/images/novedades/IMG_7764.JPG"
          alt="Empezamos en abril con la primer Games of Cloud para Partners"
        />
        <Carousel.Caption>
          <h3>Se viene la Games of Cloud para Partners</h3>
          <p>Arrancamos las batallas con los partners. En abril tenemos la primera edicion de Games of Cloud para Partners.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
          className="d-block w-100"
          src="/images/novedades/IMG_8042.JPG"
          alt="Arma tu equipo y aprovecha para aprender y pasarla bien"
        />
        <Carousel.Caption>
          <h3>Arma tu equipo y aprovecha para aprender y pasarla bien</h3>
          <p>Es tu momento para demostrar todo lo que sabes de GCP. Animate con los desafios y te convertis en el Master of Games of Cloud.</p>
        </Carousel.Caption>
      </Carousel.Item>
         
        </Carousel></div>
    )

  }

}

export default Novedades;
