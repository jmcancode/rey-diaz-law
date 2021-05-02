import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../components/navBar";
export default function LegalResources() {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row className="w-100" xs={1} md={1} lg={1}>
          <Col className="h-100">
            <p className="text-muted text-center mt-3" style={{ fontSize: 10 }}>
              San Antonio Website Design by
              <a
                target="__blank"
                href="https://www.j12designs.com"
                rel="noreferr noopener"
                style={{
                  textDecoration: "none",
                  color: "#2f2f2f",
                  paddingLeft: 3,
                }}
              >
                J12 Designs
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
