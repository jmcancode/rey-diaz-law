import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { IoPulseSharp } from "react-icons/io5";

export default function FooterNav() {
  return (
    <>
      <Container>
        <Navbar expand="lg" bg="light" fixed="bottom">
          <Nav className="ml-auto">
            <Nav.Link>
              <IoPulseSharp size="30px" color="red" />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
