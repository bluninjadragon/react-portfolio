//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function IntroBanner() {
  return (
    <div>
      <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="./images/profile pic.jpg" fluid />
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default IntroBanner;