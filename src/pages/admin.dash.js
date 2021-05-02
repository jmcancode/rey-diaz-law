import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import "react-icons";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import TopNav from "../components/navBar";

const handleDateClick = (arg) => {
  alert(arg.dateStr);
};

export default function AdminDash() {
  return (
    <>
      <TopNav />
      <Container className="h-100 mt-1 mb-5">
        <Row className="pt-3" xs={2} md={2} lg={2}>
          <Col>
            <Card>
              <Card.Body className=" text-uppercase">
                <p>DYK Post</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="text-left text-uppercase">
                <p>Blog Post</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={1} lg={1}>
          <Col></Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Card>
              <Card.Body>
                <h1 className="text-left text-uppercase">Clients</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={1} lg={1}>
          <Col>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              dateClick={handleDateClick}
            />
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
