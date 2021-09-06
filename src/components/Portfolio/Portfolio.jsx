//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Weather from "../../assets/images/Version 1.0 Weather App.png";
import Workout from "../../assets/images/workout.png";
import Ecommerce from "../../assets/images/ecommerce.jpg";
import ReadMe from "../../assets/images/readme.png";
import Notes from "../../assets/images/notes.jpg";
import Thyme from "../../assets/images/thyme.jpg";
import LOTR from "../../assets/images/ring.jpg";

function Portfolio() {
  return (

    
    <div>
        <h1>Portolio</h1>
        Below are a few highlights of finished projects and assignments. Click the image for the deployed application, and the text for the GitHub link.
      <Container>
        <a href="https://bluninjadragon.github.io/Weather-Dashboard-6/">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="weather api"
                  src={Weather}
                  rounded
                  fluid
                />
      </Col>
    </Row>
  <a href="https://github.com/bluninjadragon/Weather-Dashboard-6"><Row>
    <Col>
    Weather API Git Hub
    </Col>
  </Row>
  </a>
  </a>
</Container>

<Container>
        <a href="https://workout-tracker-jwh.herokuapp.com/?id=6130f8914398940016c866aa">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="employee tracker"
                  src={Workout}
                  rounded
                  fluid
                />
      </Col>
    </Row>
    <a href="https://github.com/bluninjadragon/HW-18-Workout-Tracker">
  <Row>
    <Col>
    Workout Tracker GitHub
    </Col>
  </Row>
  </a>
  </a>
</Container>

<Container>
        <a href="https://note-tracker-plus.herokuapp.com/">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="ecommerce"
                  src={Notes}
                  rounded
                  fluid
                />
      </Col>
    </Row>
    <a href="https://github.com/bluninjadragon/HW-11---Express">
  <Row>
    <Col>
    Note Taker GitHub
    </Col>
  </Row>
  </a>
  </a>
</Container>

<Container>
        <a href="https://github.com/bluninjadragon/Professional-README-Generator">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="readme"
                  src={ReadMe}
                  rounded
                  fluid
                />
      </Col>
    </Row>
  <Row>
    <Col>
    Professional Read Me Generator GitHub
    </Col>
  </Row>
  </a>
</Container>

<Container>
        <a href="https://redux-store-jwh.herokuapp.com/">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="redux"
                  src={Ecommerce}
                  rounded
                  fluid
                />
      </Col>
    </Row>
    <a href="https://github.com/bluninjadragon/HW-22-Redux-Store">
  <Row>
    <Col>
    Redux Store - Refactoring from Context to Redux
    </Col>
  </Row>
  </a>
  </a>
</Container>

<Container>
        <a href="https://thyme-is-money.herokuapp.com/">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="thyme"
                  src={Thyme}
                  rounded
                  fluid
                />
      </Col>
    </Row>
    <a href="https://github.com/Project-2-Full-Stack">
  <Row>
    <Col>
    Thyme is Money GitHub
    </Col>
  </Row>
  </a>
  </a>
</Container>

<Container>
        <a href="https://team-one-to-rule-them-all.github.io/projectone/">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="LOTR"
                  src={LOTR}
                  rounded
                  fluid
                />
      </Col>
    </Row>
    <a href="https://github.com/team-one-to-rule-them-all">
  <Row>
    <Col>
    Top Shelf GitHub
    </Col>
  </Row>
  </a>
  </a>
</Container>
    </div>
  );
}

export default Portfolio;