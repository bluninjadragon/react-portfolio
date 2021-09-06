//tutor suggested to save files as .jsx in order to utilize shortcuts for premade blocks of code

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Weather from "../../assets/images/Version 1.0 Weather App.png";
import Employee from "../../assets/images/employee.jpg";
import Ecommerce from "../../assets/images/ecommerce.jpg";
import ReadMe from "../../assets/images/readme.png";
import Redux from "../../assets/images/redux.png";
import Thyme from "../../assets/images/thyme.jpg";
import LOTR from "../../assets/images/ring.jpg";

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
                  src={Weather}
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

<Container>
        <a href="https://github.com/bluninjadragon/Employee-Tracker-12">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="employee tracker"
                  src={Employee}
                  rounded
                  fluid
                />
      </Col>
    </Row>
  <Row>
    <Col>
    Employee Tracker
    </Col>
  </Row>
  </a>
</Container>

<Container>
        <a href="https://github.com/bluninjadragon/HW-13-ORM-E-Commerce-Back-End">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="ecommerce"
                  src={Ecommerce}
                  rounded
                  fluid
                />
      </Col>
    </Row>
  <Row>
    <Col>
    E-Commerce Backend
    </Col>
  </Row>
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
    Professional Read Me Generator
    </Col>
  </Row>
  </a>
</Container>

<Container>
        <a href="https://github.com/bluninjadragon/HW-22-Redux-Store">
      <Row>
        <Col>
          <Image
                  className="profile justify-content-end"
                  alt="redux"
                  src={Redux}
                  rounded
                  fluid
                />
      </Col>
    </Row>
  <Row>
    <Col>
    Redux Store - Refactoring from Context to Redux
    </Col>
  </Row>
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
  <Row>
    <Col>
    Thyme is Money
    </Col>
  </Row>
  </a>
</Container>

<Container>
        <a href="https://github.com/team-one-to-rule-them-all">
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
  <Row>
    <Col>
    Team One To Rule Them All
    </Col>
  </Row>
  </a>
</Container>
    </div>
  );
}

export default Portfolio;