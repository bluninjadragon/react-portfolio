//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Portfolio() {
  return (
    <div>
        <h1>Portolio</h1>
        Below are a few highlights of finished projects and assignments
      <Container>
        <a href="https://github.com/bluninjadragon/Weather-Dashboard-6">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="weather api"
                  src="../../assets/images/Version 1.0 Weather App.png"
                  rounded
                  fluid
                />
      </Col>
    </Row>
  <Row>
    <Col>
    Weather API
    </Col>
  </Row>
  </a>
</Container>
    </div>
  );
}

export default Portfolio;