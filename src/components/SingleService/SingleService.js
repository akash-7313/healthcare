import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  console.log(serviceId, services);

  const matchedResult = services.find(
    (serve) => serve.id === parseInt(serviceId)
  );
  console.log(matchedResult?.image, matchedResult?.serviceName);

  return (
    <div>
      <Row xs={1} md={3} className="g-4 container mx-auto mt-3">
        <Col></Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid"
              src={matchedResult?.image}
            />
            <Card.Body>
              <Card.Title>{matchedResult?.serviceName}</Card.Title>
              <Card.Text className="text-primary">
                Consultant {matchedResult?.doctorName}
              </Card.Text>
              <Card.Text className="text-muted">
                {matchedResult?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default SingleService;
