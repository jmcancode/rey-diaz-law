import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Button } from "react-bootstrap";
import TopNav from "../components/navBar";

import DropZone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import Datetime from "react-datetime";
import { Plus } from "react-bootstrap-icons";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

DropZone.autoDiscover = false;

const handleDateClick = (arg) => {
  alert(arg.dateStr);
};

export default function Dashboard() {
  const [files, setFile] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });

  const images = files.map((file) => (
    <Row noGutters={true} xs={1} md={1} lg={1} key={file.name}>
      <Col style={{ margin: 4 }}>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </Col>
    </Row>
  ));

  return (
    <>
      <TopNav />
      <Container className="h-100 mt-1 mb-5">
        <Row xs={1} md={3} lg={3}>
          <Col sm>
            <Card className="m-1">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#first">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>This is a test layout</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="m-1">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#first">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>This is a test layout</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="m-1">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#first">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>This is a test layout</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
          <Col className="pt-3 m-1">
            <h5>Choose a date & time</h5>
            <Datetime
              closeOnSelect={true}
              closeOnClickOutside={true}
              dateFormat={true}
              timeFormat={true}
              value={new Date()}
            />
          </Col>
        </Row>
        <Row className="h-90" xs={1} md={1} lg={1}>
          <Col>
            <Card {...getRootProps()} className="m-1 mt-3">
              <Card.Body className="text-center">
                <input {...getInputProps()} />
                <Plus className="text-center text-muted" />
                <p className="text-center text-muted">
                  click or drag to add your files
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>{images}</Col>
        </Row>
        <Row className="w-100" xs={1} md={1} lg={1}>
          <Col className="h-100">
            <p className="text-muted text-center mt-3" style={{ fontSize: 10 }}>
              Built with 🫀 by
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
