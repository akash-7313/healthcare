import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
// import banner from "../../images/banner/banner.jpg";
import Mission from "../Mission/Mission";
import Services from "../Services/Services";
import Speciality from "../Speciality/Speciality";
import './Home.css';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Row xs={1} md={2} className="g-4 bg-img py-5">
          <Col className="d-flex align-items-center ps-5 py-5">
            <Card.Body>
              <Card.Title className="text-primary fs-1 fw-bold">
                Find the good life by <br /> good health.
              </Card.Title>
              <Card.Text className="text-white mt-3">
                The World Health Organization says: “Health is a state of
                complete physical, mental and social well-being and not merely
                the absence of disease or infirmity.”
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Col>
        </Row>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Mission></Mission>
      </div>
      <div>
        <Speciality></Speciality>
      </div>
    </div>
  );
};

export default Home;


/*
<Col className="d-flex align-items-center">
            <Card.Img variant="top" className="img-fluid" src={banner} />
          </Col>
*/ 