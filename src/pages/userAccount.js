import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import TopNav from "../components/navBar";

import { Plus } from "react-bootstrap-icons";
import DropZone from "react-dropzone";
import { useDropzone } from "react-dropzone";

import Avatar from "react-avatar";

DropZone.autoDiscover = false;

const UserAccount = () => {
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
      <Container className="pt-3">
        <Card className="p-3 m-3">
          <Row xs={1} md={1} lg={1}>
            <Col className="text-center">
              <Avatar name="Jon-Michael Narvaez" round={true} />
            </Col>
          </Row>
          <Row className="pt-2" xs={1} md={1} lg={1}>
            <Col className="text-center">
              <p>Jon-Michael Narvaez</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.File id="exampleFormControlFile1" label="" />
                </Form.Group>

                <Button
                  block
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
      <Container className="pt-3">
        <Row xs={1} md={1} lg={1}>
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
      </Container>
      <Container>
        <Row>
          <Col>
            <Card className="mt-3 m-1">
              <Card.Body className="text-center text-muted">
                user files will live here
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="w-100 " xs={1} md={1} lg={1}>
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
};

export default UserAccount;
