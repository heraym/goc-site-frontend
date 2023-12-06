import React from 'react';
import './master.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function MenuBar() {

 return (
    <div className="Menu"> 
   
    <Navbar variant="dark" expand="lg" className="color-bar"><img className="logo" src="images/cloud-logo.svg"/>
  <Container> 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navbar-custom">
      <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/reglas">REGLAS</Nav.Link>
        <Nav.Link href="/mundo">MUNDO</Nav.Link>
        <Nav.Link href="/equipos">EQUIPOS</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
}

export default MenuBar;
