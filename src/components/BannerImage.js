import React from 'react';
import './master.css';

function BannerImage() {

 return (
  <div className="banner-container">
	 <img src="/images/home_banner.png"/>
	 <div className="banner-text">Games of Cloud es una hackathon para promover el uso de la tecnologia de Google Cloud. <br/>
	 Se participa por medio de equipos que iran atravesando distintos desafios.<br/>
	 Cada equipo debera conquistar el Mundo de Games of Cloud ganando regiones en cada uno de los desafios que se presenten y asi convertirse en el Master of Cloud.
	 <br/>
Cada desafio provee ambientes de laboratorios para cada equipo, donde deberan usar componentes de Google Cloud para resolver cada caso.</div>
	 
   </div>
 )
}

export default BannerImage;
