import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import TopNav from "../components/navBar";

import { Plus } from "react-bootstrap-icons";
import DropZone from "react-dropzone";
import { useDropzone } from "react-dropzone";

import { db } from "../Firebase/config";
import { useAuth } from "../Firebase/context";
import Avatar from "react-avatar";

export default function UserAccount() {
  const [files, setFile] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState("");
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("users")
      .add({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        address: address,
        addressTwo: addressTwo,
        city: city,
        state: state,
        zip: zip,
        imageUrl: imageUrl,
      })
      .then(() => {
        setLoader(false);
        alert("Your account was successfully set up. Welcome!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setImageUrl("");
  };

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: () => "image/*",
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

  DropZone.autoDiscover = false;

  return (
    <>
      <TopNav />
      <Container className="pt-3">
        <Card className="p-3 m-3">
          <Row xs={1} md={1} lg={1}>
            <Col className="text-center">
              {users.map(({ imageUrl }) => (
                <Avatar src={imageUrl} round={true} />
              ))}
            </Col>
          </Row>
          <Row className="pt-2" xs={1} md={1} lg={1}>
            <Col className="text-center">{!currentUser && <p>Welcome</p>}</Col>
            <Col className="m-1 pb-4">
              {users.map(({ firstName }) => (
                <p className="text-center">Welcome back, {firstName}</p>
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleUserSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="1234 Main St"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    value={addressTwo}
                    onChange={(e) => setAddressTwo(e.target.value)}
                    placeholder="Apartment, studio, or floor"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      placeholder="San Antonio"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      as="select"
                    >
                      <option>Choose...</option>
                      <option>Texas</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="78205"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Drivers Licence"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </Form.Group>

                <Button
                  block
                  style={{
                    backgroundColor: loader ? "#c02626" : "#bfa36f",
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
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card className="mt-3 m-1">
              <Card.Body className="text-center text-muted">
                <Col>{images}</Col>
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
}
