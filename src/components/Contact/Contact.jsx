//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
      <div id ="contact">
        <Container>
    <Row>
      <Col>
      <h1>Contact</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="John" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Smith" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Your Message Here"/>
  </Form.Group>
</Form>
      You can reach me via email, LinkedIn, or explore my GitHub below.
      <br /> <br />
      Email: <a href="jwhsieh91@gmail.com">jwhsieh91@gmail.com</a>
      <br /> <br />
      <a href="https://www.linkedin.com/in/jason-hsieh-86023b27/">LinkedIn</a>
      <br /> <br />
      <a href="https://github.com/bluninjadragon?tab=repositories">GitHub</a>
      </Col>
    </Row>
  </Container>
      </div>
  );
}

export default Contact;