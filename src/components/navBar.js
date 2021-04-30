import React from "react";
import logo from "../assets/Rey-Diaz-Logo-White.png";
import { Image, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
        <Navbar.Brand href="#home">
          <Image src={logo} width={150} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="text-muted" href="#deets">
              My Account
            </Nav.Link>
            <Nav.Link className="text-muted" eventKey={2} href="#memes">
              Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
