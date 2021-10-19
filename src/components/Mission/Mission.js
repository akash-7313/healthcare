import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import picture from "../../images/banner/blog1.jpg";
import './Mission.css';


const Mission = () => {
  return (
    <div className="container">
      <Row xs={1} md={1} className="g-4 py-4 mt-4">
        <Col>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card.Img
                className=" h-100 myImageStyle shadow-sm"
                variant="top"
                src={picture}
              ></Card.Img>
            </Col>
            <Col className="mb-3">
              <Row xs={1} md={1} className="g-4 p-2">
                <Col>
                  <Card.Body className="shadow-sm rounded-3">
                    <i className="fas fa-satellite fa-2x text-muted"></i>
                    <Card.Title className="d-inline ms-2 fw-bold">
                      Our Mission
                    </Card.Title>
                    <Card.Text className="ps-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Row xs={1} md={1} className="g-4 p-2">
                <Col>
                  <Card.Body className="shadow-sm rounded-3">
                    <i className="fas fa-briefcase fa-2x text-muted"></i>
                    <Card.Title className="d-inline ms-2 fw-bold">
                      Who we are
                    </Card.Title>
                    <Card.Text className="ps-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Row xs={1} md={1} className="g-4 p-2">
                <Col>
                  <Card.Body className="shadow-sm rounded-3">
                    <i className="fas fa-camera fa-2x text-muted"></i>
                    <Card.Title className="d-inline ms-2 fw-bold">
                      Our Vission
                    </Card.Title>
                    <Card.Text className="ps-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Mission;

/*
<Card.Body>
                  <Card.Text>
                    <small className="text-muted"></small>
                  </Card.Text>
                  <Card.Title>
                    <b className="text-success fs-6"></b>
                  </Card.Title>
                </Card.Body>
*/
