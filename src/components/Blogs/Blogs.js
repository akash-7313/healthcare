import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="bg-light mt-4">
      <div className="container pt-5 pb-4 overflow-hidden">
        <div className="text-center px-5">
          <h1 className="text-primary opacity-75 d-inline pb-1">
            Follow the latest article & news.
          </h1>
        </div>
        <Row xs={1} md={3} className="g-4 py-4 px-3">
          {blogs.map((blog) => (
            <BlogDetails key={blog.id} blog={blog}></BlogDetails>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Blogs;
