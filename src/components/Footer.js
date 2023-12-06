import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import './master.css';
  
const Footer = () => {
  return (
      <Container className="footer">
      <hr></hr>
        <Row>
           <Col>
            <h5>Nosotros</h5>
          </Col>
          <Col>
            <h5>El Workshop</h5>
          </Col>
          <Col>
            <h5>Google Cloud</h5>
             
          </Col>
          <Col>
            <h5>Contactenos</h5>
        
          </Col>
           
        </Row>
        <h6>Copyright © 2022. All rights reserved.</h6>
      </Container>
  );
};
export default Footer;