import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BlogDetails = (props) => {
  console.log(props.blog);
  const { image, blogName, date, description } = props.blog;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" className="h-100" src={image} />
        <Card.Body>
          <Card.Text className="text-primary fw-bold">{date}</Card.Text>
          <Card.Title>{blogName} </Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <NavLink to="/" variant="primary" className="btn-sm text-decoration-none fw-bold">
            Read more <i className="fas fa-arrow-circle-right"></i>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogDetails;
