import React, { useState } from "react";
import logo from "../assets/Rey-Diaz-Logo-White.png";
import { Image, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Firebase/context";

export default function TopNav() {
  const history = useHistory();
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout(e) {
    e.preventDefault();
    setError("");

    try {
      await logout();
      history.push("/sign-in");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="w-100 d-flex"
        variant="dark"
      >
        <Navbar.Brand href="#home" as={Link} to="/">
          <Image src={logo} width={190} height={100} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" href="#admin">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/location" href="#inbox">
              Locations
            </Nav.Link>
            <NavDropdown title="Resouces" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/resources" href="#action/3.1">
                Roadside Assistance
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/legalglossary"
                href="#action/3.3"
              >
                Personal Injury Glossary
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                target="__blank"
                rel="noreffer nolooper"
                href="https://reydiaz.law/"
              >
                Rey Diaz Law
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/myaccount">
              My Account
            </Nav.Link>
            {!currentUser && (
              <Nav.Link as={Link} to="/login" className="text-muted">
                Login
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                as={Link}
                to="/"
                className="text-muted"
                onClick={handleLogout}
              >
                Logout
              </Nav.Link>
            )}
            {error}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
