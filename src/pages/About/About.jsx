//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/images/profile pic.jpg";

function About() {
  return (
      <div>
        <Container>
        <Row>
      <Col>
      <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  rounded
                  fluid
                />
      </Col>
    </Row>
    <Row>
      <Col>
      <br /> <br />
      <h1>About Me</h1>
      Hello!
      <br /> <br />
      I'm Jason Hsieh, and currently I am an aspiring Full Stack Developer while working full time at Northwestern Medicine under the Informatics Systems department and I help manage the electronic medical records system called Epic.
      <br /> <br />
      My past experience includes being an IT consultant for both the hospital laboratory and hospital cost accounting workflow. This includes previous SQL and cost account modeling experience.
      <br /> <br />
      Below you will find my work and experience from the Northwestern University Full Stack Bootcamp course I've taken over the past year.
      <br /> <br />
      In my spare time when I'm not coding or working full time, I love to cook, break dance, and listen play music on my guitar.
      <br /> <br />
      </Col>
    </Row>
  </Container>
      </div>
  );
}

export default About;