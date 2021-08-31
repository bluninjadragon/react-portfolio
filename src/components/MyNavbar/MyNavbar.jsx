//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MyNavbar() {
  return (
    <div>
      <Navbar fixed = "top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Jason Hsieh</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;