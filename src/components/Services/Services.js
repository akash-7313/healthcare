import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    

    return (
      <div className="bg-light mt-4">
        <div className="container pt-5 pb-4 overflow-hidden">
          <div className="text-center px-5">
            <h1 className="fw-bold text-primary d-inline pb-1">Our Services</h1>
            <p className="text-muted mt-3">
              Living a healthy lifestyle can help prevent chronic diseases and
              long-term illnesses. Feeling good about yourself and taking care
              of your health are important for your self-esteem and self-image.
            </p>
          </div>
          <Row xs={1} md={2} className="g-4 py-4 px-3">
            {services.map((service) => (
              <ServiceDetails key={service.id} service={service}></ServiceDetails>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default Services;