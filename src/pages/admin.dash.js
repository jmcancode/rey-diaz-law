import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Form,
} from "react-bootstrap";

import { FiPlus } from "react-icons/fi";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import TopNav from "../components/navBar";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// import cellEditFactory from "react-bootstrap-table2-editor";
// import paginationFactory from "react-bootstrap-table2-paginator";

import { db } from "../Firebase/config";

const handleDateClick = (arg) => {
  alert(arg.dateStr);
};
const { SearchBar } = Search;
const products = [
  {
    id: "1",
    name: "Juan Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "Austin",
  },
  {
    id: "3",
    name: "Jack Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "Laradeo",
  },
  {
    id: "4",
    name: "Mark Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "Edinburg",
  },
  {
    id: "5",
    name: "Carl Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "6",
    name: "Kyle Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "7",
    name: "Juana Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "8",
    name: "Juanitta Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "9",
    name: "James Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "10",
    name: "Juan R. Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
  {
    id: "11",
    name: "Michael Doe",
    email: "jd@someemail.com",
    phone: "210-803-0109",
    location: "San Antonio",
  },
];
const columns = [
  {
    dataField: "id",
    text: "Client id",
    headerAlign: "left",
  },
  {
    dataField: "name",
    text: "Client Name",
    headerAlign: (column, colIndex) => "left",
  },
  {
    dataField: "email",
    text: "Email Address",
    headerAlign: "left",
  },
  {
    dataField: "phone",
    text: "Phone Number",
    headerAlign: "left",
  },
  {
    dataField: "location",
    text: "Location",
    headerAlign: "left",
  },
];

function MyVerticallyCenteredModal(props) {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [loader, setLoader] = useState("");

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("dyk")
      .add({
        files: files,
        title: title,
        content: content,
      })
      .then(() => {
        setLoader(false);
        alert("Did you know uploaded ");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFiles("");
    setTitle("");
    setContent("");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Post: Did you know?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleBlogSubmit}>
          <Form.Group>
            <Form.File
              value={files}
              onChange={(e) => setFiles(e.target.value)}
              id="upload"
              label="Add your photo"
              className="pb-2"
            />
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={4}
              type="text"
              placeholder="Lorem Ipsum"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "#bfa36f",
              borderColor: "transparent",
            }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: loader ? "#c02626" : "#bfa36f",
              borderColor: "transparent",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModalTwo(props) {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [loader, setLoader] = useState("");

  const handleWhatsNew = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("whatsNew")
      .add({
        blogTitle: blogTitle,
        blogContent: blogContent,
      })
      .then(() => {
        setLoader(false);
        alert("Whats new uploaded ");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setBlogTitle("");
    setBlogContent("");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Post: Whats new?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleWhatsNew}>
          <Form.Group>
            <Form.File id="upload" label="Add your photo" className="pb-2" />
            <Form.Control
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={4}
              type="text"
              placeholder="Lorem Ipsum"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{
              backgroundColor: "#bfa36f",
              borderColor: "transparent",
            }}
            onClick={props.onHide}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: loader ? "#c02626" : "#bfa36f",
              borderColor: "transparent",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default function AdminDash() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <TopNav />
      <Container fluid className="h-100 mt-1 mb-3">
        <Row className="pt-3" xs={1} md={2} lg={2}>
          <Col>
            <Card>
              <Card.Body className=" text-center text-uppercase">
                <h5>Did you Know?</h5>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Body className="text-center text-uppercase">
                <h5>Whats New</h5>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModalTwo
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Card>
              <Card.Body>
                <ToolkitProvider
                  keyField="id"
                  data={products}
                  columns={columns}
                  search
                >
                  {(props) => (
                    <div>
                      <SearchBar
                        style={{
                          borderRightColor: "transparent",
                          borderTopColor: "transparent",
                          borderLeftColor: "transparent",
                          backgroundColor: "transparent",
                        }}
                        {...props.searchProps}
                      />
                      <hr />
                      <BootstrapTable {...props.baseProps} />
                    </div>
                  )}
                </ToolkitProvider>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={1} lg={1}>
          <Col>
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
              eventAdd={true}
              nowIndicator={true}
              slotDuration="00:30:00"
              dateClick={handleDateClick}
              events={[
                {
                  title: "Discovery Meeting with",
                  date: "2021-05-06",
                  time: "23:00:00",
                },
                { title: "Garza Case | Bexar County", date: "2021-05-12" },
              ]}
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
