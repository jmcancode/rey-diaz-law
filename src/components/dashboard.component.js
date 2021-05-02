import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TopNav from "../components/navBar";

import DropZone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import Datetime from "react-datetime";
import { Plus } from "react-bootstrap-icons";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import dykphoto from "../assets/adrian-n-FU4yhbdRAXU-unsplash.jpg";
import newsphoto from "../assets/tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg";
import { Link } from "react-router-dom";

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
      <Container className="h-100 mt-3">
        <Row noGutters={true} xs={1} md={2} lg={2}>
          <Col className="p-1">
            <Card className="h-100 p-3">
              <Card.Img variant="top" src={dykphoto} />
              <Card.Body>
                <Card.Title>Did you know?</Card.Title>
                <Card.Text className="text-left">
                  The blog that keeps you informed. Learn more and share with
                  your network.
                </Card.Text>
                <Link to="/didyouknow" style={{ color: "#bfa36f" }}>
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-1 h-100">
            <Card>
              <Card.Img
                className="p-3"
                variant="top"
                src={newsphoto}
                alt="glossary-header"
              />
              <Card.Body>
                <Card.Title>Whats new</Card.Title>
                <Card.Text>
                  General knowledge from the firm. A daily, weekly, bi-annual
                  post.
                </Card.Text>
                <Link to="/whatsnew" style={{ color: "#bfa36f" }}>
                  Read more
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row noGutters={true} className="pt-3" xs={1} md={1} lg={1}>
          <Col>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              dateClick={handleDateClick}
            />
          </Col>
          <Col className="pt-3 m-1">
            <h5>Request an appointment</h5>
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
