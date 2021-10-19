import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Speciality = () => {
  return (
    <div className="container mt-5">
      <div>
        <h2 className="text-primary text-center opacity-75">Explore by Category</h2>
      </div>
      <Row xs={1} md={3} className="g-4 mt-3">
        <Col>
          <Card className="rounded-3 shadow-sm">
            <Card.Body>
              <Card.Text>
                <i className="fas fa-user-md fa-4x text-primary opacity-50"></i>
              </Card.Text>
              <Card.Title>Doctors</Card.Title>
              <Card.Text className="text-muted">
                High-quality child care keeps children safe and healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-3 shadow-sm">
            <Card.Body>
              <Card.Text>
                <i className="fas fa-hospital-symbol fa-4x text-primary opacity-75"></i>
              </Card.Text>
              <Card.Title>Clinic</Card.Title>
              <Card.Text className="text-muted">
                High-quality child care keeps children safe and healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-3 shadow-sm">
            <Card.Body>
              <Card.Text>
                <i className="fas fa-flask fa-4x text-primary opacity-50"></i>
              </Card.Text>
              <Card.Title>Labs</Card.Title>
              <Card.Text className="text-muted">
                High-quality child care keeps children safe and healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-3 shadow-sm">
            <Card.Body>
              <Card.Text>
                <i className="fas fa-ambulance fa-4x text-primary opacity-50"></i>
              </Card.Text>
              <Card.Title>Emergancy</Card.Title>
              <Card.Text className="text-muted">
                High-quality child care keeps children safe and healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="rounded-3 shadow-sm">
            <Card.Body>
              <Card.Text>
                <i className="fas fa-shield-alt fa-4x text-primary opacity-50"></i>
              </Card.Text>
              <Card.Title>Insurance</Card.Title>
              <Card.Text className="text-muted">
                High-quality child care keeps children safe and healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Speciality;
