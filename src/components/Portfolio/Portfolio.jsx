//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio() {
  return (
    <div>
        <h1>Portolio</h1>
      <Container>
  <Row>
    <Col>
    Project 1
    <br /> <br />
    Project 2
    <br /> <br />
    Employee Tracker
    <br /> <br />
    README Generator
    <br /> <br />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default Portfolio;