import { motion } from "framer-motion";
import React from "react";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import TopNav from "../components/navBar";
export default function LegalResources() {
  return (
    <>
      <TopNav />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="container pt-3 p-4"
      >
        <Row xs={1} md={1} lg={1} className="pt-2 pb-2">
          <Col className="text-center">
            <h2>Roadside Assistance</h2>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Resource #1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    The statute of limitations is essentially how long you have
                    to file an injury claim against the at-fault person,
                    business, or insurance company. For example, the state of
                    Texas has a statute of limitations of three (3) years on
                    most injury claims.
                    <br />
                    <br />
                    <a style={{ color: "#c02626" }} href="tel: +12101231154">
                      (210) 123-456
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Resource #2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    The statute of limitations is essentially how long you have
                    to file an injury claim against the at-fault person,
                    business, or insurance company. For example, the state of
                    Texas has a statute of limitations of three (3) years on
                    most injury claims.
                    <br />
                    <br />
                    <a style={{ color: "#c02626" }} href="tel: +12101231154">
                      (210) 123-456
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Resource #2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    The statute of limitations is essentially how long you have
                    to file an injury claim against the at-fault person,
                    business, or insurance company. For example, the state of
                    Texas has a statute of limitations of three (3) years on
                    most injury claims.
                    <br />
                    <br />
                    <a style={{ color: "#c02626" }} href="tel: +12101231154">
                      (210) 123-456
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Resource #3
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    The statute of limitations is essentially how long you have
                    to file an injury claim against the at-fault person,
                    business, or insurance company. For example, the state of
                    Texas has a statute of limitations of three (3) years on
                    most injury claims.
                    <br />
                    <br />
                    <a style={{ color: "#c02626" }} href="tel: +12101231154">
                      (210) 123-456
                    </a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
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
      </motion.div>
    </>
  );
}
