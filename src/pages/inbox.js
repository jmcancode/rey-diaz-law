import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Accordion,
  Button,
  Jumbotron,
  Form,
  InputGroup,
} from "react-bootstrap";
import { db } from "../Firebase/config";
import TopNav from "../components/navBar";

const UserInbox = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("subscribers")
      .add({
        email: email,
      })
      .then(() => {
        setLoader(false);
        alert("Thank you for subscribing, we promise not to spam you.");
      })
      .catch((err) => {
        alert(err.message);
        setLoader(false);
      });
    setEmail("");
  };

  return (
    <>
      <TopNav />
      <Container className="pt-3">
        <Row>
          <Col>
            <Jumbotron className="bg-transparent">
              <h1>Stay Current</h1>
              <p>
                Stay in the loop with our bi-annual newsletter offering the
                latest updates in state laws and the "do's" & "do not's" of what
                to do while pulled over.
              </p>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="email@example.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputGroup.Append>
                    <Button
                      style={{
                        backgroundColor: loader ? "#c02626" : "#bfa36f",
                        borderColor: "transparent",
                      }}
                      variant="dark"
                      type="submit"
                    >
                      submit
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>San Antonio</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <a style={{ color: "#c02626" }} href="tel:+12102241000">
                    (210) 224-1000
                  </a>
                </Card.Subtitle>
                <Card.Text>
                  308 West Josephine Street San Antonio, Texas 78212
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Austin</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <a style={{ color: "#c02626" }} href="tel:+15124481000">
                    (512) 448-1000
                  </a>
                </Card.Subtitle>
                <Card.Text>
                  2028 East Ben White Blvd Ste 330 Austin, Texas 78741
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Edinburg</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <a style={{ color: "#c02626" }} href="tel:+19563161000">
                    (956) 316-1000
                  </a>
                </Card.Subtitle>
                <Card.Text>
                  209 East University Drive Edinburg, Texas 78539
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="">
              <Card.Body>
                <Card.Title>Laredo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <a style={{ color: "#c02626" }} href="tel:+19567951000">
                    (956)795-1000
                  </a>
                </Card.Subtitle>
                <Card.Text>4799 Patio Lane Laredo, Texas 78041</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Card className="mb-2">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="outlined"
                      eventKey="0"
                    >
                      Toll Free
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <a style={{ color: "#c02626" }} href="tel:+18002440001">
                        (800) 224-001
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="outlined"
                      eventKey="1"
                    >
                      Fax
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <a style={{ color: "#c02626" }} href="tel:+12102241030">
                        (210) 224-130{" "}
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="outlined"
                      eventKey="2"
                    >
                      Text
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <a style={{ color: "#c02626" }} href="tel:+12102242000">
                        (210) 224-2000
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserInbox;
