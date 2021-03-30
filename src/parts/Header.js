import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header(props) {
  return (
    <div className="container">
    <Navbar className="navbar-navy" expand="lg">
      <div>
        <Navbar.Brand className="logo" href="/">
          FF.
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="">
          <Nav.Link href="/movies">
          Movies
          </Nav.Link>
          <Nav.Link href="/about">
            About Us
          </Nav.Link>
          <Nav.Link href="/contact">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}