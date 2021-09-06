//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
      <div>
        <Container>
    <Row>
      <Col>
      <h1>Contact</h1>
      You can reach me via email, LinkedIn, or explore my GitHub below.
      <br /> <br />
      Email: jwhsieh91@gmail.com
      <br /> <br />
      <a href="https://www.linkedin.com/in/jason-hsieh-86023b27/">LinkedIn
      <br /> <br />
      Passions
      <br /> <br />
      </Col>
    </Row>
  </Container>
      </div>
  );
}

export default Contact;