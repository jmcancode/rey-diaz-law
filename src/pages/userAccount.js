import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import TopNav from "../components/navBar";

import { Plus } from "react-bootstrap-icons";
import { useDropzone } from "react-dropzone";

import { db } from "../Firebase/config";
import { useAuth } from "../Firebase/context";
import Avatar from "react-avatar";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function UserAccount() {
  const [files, setFiles] = useState([]);
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

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: ".doc, .pdf",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <TopNav />
      <Container className="pt-3">
        <Card key={users.doc} className="p-3 m-3">
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
            <Card {...getRootProps({ style })} className="m-1 mt-3">
              <Card.Body onClick={open} className="text-center">
                <input {...getInputProps()} />
                <Plus className="text-center text-muted" />
                <p className="text-center text-muted">
                  tap or drag to add your files
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
                <Row key={filepath.name}>
                  <Col>{filepath}</Col>
                </Row>
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
