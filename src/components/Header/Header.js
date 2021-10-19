import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log('header',user)
  console.log("header", user?.displayName);

  const logo = {
    fontFamily: "'Gluten', cursive",
    marginRight: "10px",
    cursor: "pointer",
  };
  return (
    <Navbar bg="dark" sticky="top" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <span style={logo} className="name me-3 fs-3">
            <b className="text-primary">he</b>
            <b className="text-warning">al</b>
            <b className="text-success">th</b>
            <b className="text-primary">C</b>
            <b className="text-warning">ar</b>
            <b className="text-success">e</b>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink
              className="text-decoration-none me-4 text-white py-2"
              exact
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none me-4 text-white py-2"
              exact
              to="/blog"
            >
              Blogs
            </NavLink>
            <NavLink
              className="text-decoration-none me-4 text-white py-2"
              exact
              to="/about"
            >
              About
            </NavLink>
            {user?.email && (
              <Navbar.Text className="pe-3 text-light">
                {user?.displayName}
              </Navbar.Text>
            )}
            {user?.email ? (
              <button
                onClick={logOut}
                className="btn btn-sm btn-primary rounded-3 px-3 py-2"
              >
                Log out
              </button>
            ) : (
              <div>
                <NavLink
                  className="text-decoration-none me-4 text-white py-2"
                  exact
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink exact to="/register">
                  <button className="btn btn-sm btn-primary rounded-3 px-3 py-2">
                    Register
                  </button>
                </NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
