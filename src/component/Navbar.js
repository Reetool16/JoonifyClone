import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assest/joonifyLogo.c691161d.svg";
function MyNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top" // Add fixed="top" to make the Navbar sticky
      style={{ backgroundColor: "#fff" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#deets">
              <Button
                type="submit"
                id="login_btn"
                style={{ backgroundColor: "#2a2a84" }}
              >
                Login
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button
                type="submit"
                id="login_btn"
                style={{ backgroundColor: "#ed037c" }}
              >
                Get Started at only &#8377;1999{" "}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
