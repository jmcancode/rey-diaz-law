import React, { useState, useEffect } from "react";
import { Row, Col, Card, Modal, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import TopNav from "../components/navBar";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { db } from "../Firebase/config";

const handleDateClick = (arg) => {
  alert(arg.dateStr);
};
const { SearchBar } = Search;

const expandRow = {
  renderer: (row) => <div></div>,
};

function MyVerticallyCenteredModal(props) {
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState("");

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await db
      .collection("dyk")
      .add({
        files: files,
        title: title,
        content: content,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoader(false);
        alert("Did you know...you successfully uploaded to the data base!!");
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
            className="ml-2"
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
  const [loading, setLoading] = useState("");

  const handleWhatsNew = async (e) => {
    e.preventDefault();
    setLoading(true);

    await db
      .collection("whatsNew")
      .add({
        blogTitle: blogTitle,
        blogContent: blogContent,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoading(false);
        alert("Upload successful! You need a 2 hour lunch now! ");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
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
            className="ml-2"
            style={{
              backgroundColor: loading ? "#c02626" : "#bfa36f",
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
function MyVerticallyCenteredModalThree(props) {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [loading, setLoading] = useState("");

  const handleFreeInfo = async (e) => {
    e.preventDefault();
    setLoading(true);

    await db
      .collection("freeInformation")
      .add({
        blogTitle: blogTitle,
        blogContent: blogContent,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoading(false);
        alert("Successfully upload! Great job, take the day off! ");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
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
          Admin Post: Free Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFreeInfo}>
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
            className="ml-2"
            style={{
              backgroundColor: loading ? "#c02626" : "#bfa36f",
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
  const [modalShowTwo, setModalShowTwo] = useState(false);
  const [modalShowThree, setModalShowThree] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [tel, setTel] = useState("");
  const [loader, setLoader] = useState("");
  const [clients, setClients] = useState("");

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await db
      .collection("client")
      .add({
        email: email,
        fullName: fullName,
        address: address,
        addressTwo: addressTwo,
        city: city,
        tel: tel,
        state: state,
        zip: zip,
        createdAt: new Date().toDateString(),
      })
      .then(() => {
        setLoader(false);
        alert("You've successfully created a client account! ");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");

    setFullName("");
    setAddress("");
    setCity("");
    setTel("");
    setState("");
    setZip("");
  };

  useEffect(() => {
    db.collection("client")
      .orderBy("createdAt", "desc")
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) =>
        setClients(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      setLoader(false);
    };
  }, []);

  const products = [];

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
  return (
    <React.Fragment>
      <TopNav />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        fluid
        className=" container h-100 mt-1 mb-3"
      >
        <Row className="pt-3" xs={1} md={3} lg={3}>
          <Col className="mb-1">
            <Card
              style={{
                height: "150px",
                borderRadius: "15px",
                borderColor: "#bfa36f",
              }}
            >
              <Card.Body className=" text-center text-uppercase">
                <p>Did you Know?</p>
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
          <Col className="mb-1">
            <Card
              style={{
                height: "150px",
                borderRadius: "15px",
                borderColor: "#bfa36f",
              }}
            >
              <Card.Body className=" text-center text-uppercase">
                <p>Whats New</p>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShowTwo(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModalTwo
                  show={modalShowTwo}
                  onHide={() => setModalShowTwo(false)}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-1">
            <Card
              style={{
                height: "150px",
                borderRadius: "15px",
                borderColor: "#bfa36f",
              }}
            >
              <Card.Body className="text-center text-uppercase">
                <p>Free Information</p>
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  onClick={() => setModalShowThree(true)}
                >
                  <FiPlus /> Add a post
                </Button>

                <MyVerticallyCenteredModalThree
                  show={modalShowThree}
                  onHide={() => setModalShowThree(false)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Card
              style={{ borderColor: "#bfa36f", borderRadius: "15px" }}
              className="d-none d-sm-block	d-sm-none d-md-block"
            >
              <Card.Body className="text-uppercase">
                <h5>Add a new client</h5>
                <hr />
                <Form onSubmit={handleClientSubmit}>
                  <Row xs={3} md={3} lg={3}>
                    <Col>
                      <Form.Control
                        type={fullName}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        placeholder="email@email.com"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        type="tel"
                        required
                        placeholder="2101231123"
                      />
                    </Col>
                  </Row>
                  <Row className="pt-2" xs={1} md={1} lg={1} s>
                    <Col>
                      <Form.Control
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        text="text"
                        placeholder="Address"
                      />
                    </Col>
                    <Col className="pt-2">
                      <Form.Control
                        vale={addressTwo}
                        onChange={(e) => setAddressTwo(e.target.value)}
                        text="text"
                        placeholder="Apt, FL, Bldg #"
                      />
                    </Col>
                  </Row>
                  <Row xs={3} md={3} lg={3} className="pt-2">
                    <Col>
                      <Form.Control
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        as="select"
                      >
                        <option>Choose one...</option>
                        <option>San Antonio</option>
                        <option>Austin</option>
                        <option>Edinburg</option>
                        <option>Laredo</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        required
                        as="select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option>Choose one...</option>
                        <option>Texas</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                        placeholder="Zip"
                      />
                    </Col>
                  </Row>
                  <Button
                    className="mt-2"
                    size="sm"
                    block
                    style={{
                      backgroundColor: loader ? "#c02626" : "#bfa36f",
                      borderColor: "transparent",
                    }}
                    type="sumbit"
                  >
                    {loader ? "Loading... " : "submit"}
                  </Button>
                </Form>
                <ToolkitProvider
                  keyField="id"
                  data={products}
                  columns={columns}
                  search={true}
                >
                  {(props) => (
                    <div>
                      <hr />
                      <SearchBar
                        style={{
                          borderRightColor: "transparent",
                          borderTopColor: "transparent",
                          borderLeftColor: "transparent",
                          backgroundColor: "transparent",
                        }}
                        {...props.searchProps}
                      />

                      <BootstrapTable
                        wrapperClasses="table-responsive"
                        striped
                        bordered={false}
                        expandRow={expandRow}
                        {...props.baseProps}
                      />
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
                  date: "2021-05-22",
                  time: "08:00:00",
                },
                { title: "Garza Case | Bexar County", date: "2021-05-19" },
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
      </motion.div>
    </React.Fragment>
  );
}
