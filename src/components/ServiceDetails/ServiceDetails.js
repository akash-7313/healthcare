import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ServiceDetails = (props) => {
  const { id,image, doctorName, serviceName, description } = props.service;

    const url = `service/${id}`;

  return (
    <Col>
      <Card>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card.Img className=" h-100" variant="top" src={image}></Card.Img>
          </Col>
          <Col className="mb-3">
            <Card.Body>
              <Card.Text>
                <small className="text-muted">by {doctorName}</small>
              </Card.Text>
              <Card.Title>
                <b className="text-success fs-6">{serviceName}</b>
              </Card.Title>
              <Card.Text>
                <small className="text-muted">{description.slice(0,57)}</small>
              </Card.Text>
            </Card.Body>
            <NavLink to={url} className="ps-3">
              <Button variant="primary" className="btn-sm">Learn more</Button>
            </NavLink>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ServiceDetails;

