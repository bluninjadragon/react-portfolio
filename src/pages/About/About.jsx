//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div>
        <h1>About Me</h1>
      <Container>
  <Row>
    <Col>
    Hello!
    <br /> <br />
    Summary of current and past exp
    <br /> <br />
    Bootcamp experience
    <br /> <br />
    Passions
    <br /> <br />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default About;