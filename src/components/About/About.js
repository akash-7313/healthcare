import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="text-primary opacity-75">Our Speciality</h2>
        <p className="text-muted">
          It helps children develop skills they will need for success in school
          and in their lives outside of school: Social, emotional and
          communication skills.
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 mt-3">
        <Col>
          <Card.Body className="rounded-3 shadow-sm text-center">
            <Card.Text>
              <i className="fas fa-stethoscope fa-4x text-primary opacity-75"></i>
            </Card.Text>
            <Card.Title>Primary Care</Card.Title>
            <Card.Text className="text-muted">
              High-quality child care keeps children safe and healthy.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="rounded-3 shadow-sm text-center">
            <Card.Text>
              <i className="fas fa-swimmer fa-4x text-primary opacity-75"></i>
            </Card.Text>
            <Card.Title>Sport Medicine</Card.Title>
            <Card.Text className="text-muted">
              High-quality child care keeps children safe and healthy.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="rounded-3 shadow-sm text-center">
            <Card.Text>
              <i className="fas fa-heartbeat fa-4x text-primary opacity-75"></i>
            </Card.Text>
            <Card.Title>Cardiology</Card.Title>
            <Card.Text className="text-muted">
              High-quality child care keeps children safe and healthy.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="rounded-3 shadow-sm text-center">
            <Card.Text>
              <i className="fas fa-ambulance fa-4x text-primary opacity-75"></i>
            </Card.Text>
            <Card.Title>Emergancy Medicine</Card.Title>
            <Card.Text className="text-muted">
              High-quality child care keeps children safe and healthy.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="rounded-3 shadow-sm text-center">
            <Card.Text>
              <i className="fas fa-cut fa-4x text-primary opacity-75"></i>
            </Card.Text>
            <Card.Title>General Surgery</Card.Title>
            <Card.Text className="text-muted">
              High-quality child care keeps children safe and healthy.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="rounded-3 shadow-sm text-center">
            <Card.Text>
              <i className="fas fa-syringe fa-4x text-primary opacity-75"></i>
            </Card.Text>
            <Card.Title>Infectionous Disease</Card.Title>
            <Card.Text className="text-muted">
              High-quality child care keeps children safe and healthy.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default About;
