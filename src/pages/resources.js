import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../components/navBar";
export default function LegalResources() {
  return (
    <>
      <TopNav />
      <Container className="pt-3 m-2 p-4">
        <Row xs={1} md={1} lg={1} className="pt-2 pb-2">
          <Col className="text-center">
            <h2>Roadside Assistance</h2>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <h5>Resource #1</h5>
          </Col>
          <Col>
            <p className="text-left">
              The statute of limitations is essentially how long you have to
              file an injury claim against the at-fault person, business, or
              insurance company. For example, the state of Texas has a statute
              of limitations of three (3) years on most injury claims.
            </p>
            <p>210-754-1245</p>
          </Col>
          <Col>
            <h5>Resource #2</h5>
          </Col>
          <Col>
            <p className="text-left">
              The statute of limitations is essentially how long you have to
              file an injury claim against the at-fault person, business, or
              insurance company. For example, the state of Texas has a statute
              of limitations of three (3) years on most injury claims.
            </p>
            <p>210-754-1245</p>
          </Col>
          <Col>
            <h5>Resource #3</h5>
          </Col>
          <Col>
            <p className="text-left">
              The statute of limitations is essentially how long you have to
              file an injury claim against the at-fault person, business, or
              insurance company. For example, the state of Texas has a statute
              of limitations of three (3) years on most injury claims.
            </p>
            <p>210-754-1245</p>
          </Col>
          <Col>
            <h5>Resource #4</h5>
          </Col>
          <Col>
            <p className="text-left">
              The statute of limitations is essentially how long you have to
              file an injury claim against the at-fault person, business, or
              insurance company. For example, the state of Texas has a statute
              of limitations of three (3) years on most injury claims.
            </p>
            <p>210-754-1245</p>
          </Col>
        </Row>
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
