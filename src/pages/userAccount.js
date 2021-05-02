import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  FormGroup,
} from "react-bootstrap";
import TopNav from "../components/navBar";

import Avatar from "react-avatar";

const UserAccount = () => {
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
            <h5 className="ml-3">Your Documents</h5>
          </Col>
          <Col>
            <Card className="p-3 m-3">
              <Card.Body>
                <p>This is where uploaded and downloaded doc will live</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="p-3">
        <Card className="p-3 m-3">
          <Card.Title className="ml-3">Payment Information</Card.Title>
          <Form>
            <FormGroup>
              <Col>
                <Form.Control
                  className="mb-2"
                  type="name"
                  placeholder="Name on card"
                />
                <Form.Control
                  className="mb-2"
                  type="credit"
                  placeholder="4242 4242 4242 4242"
                />
              </Col>
              <Col>
                <Form.Control
                  className="mb-2"
                  type="date"
                  placeholder="MM/YY"
                />
                <Form.Control
                  className="mb-2"
                  type="number"
                  placeholder="CVV"
                />
              </Col>
            </FormGroup>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#bfa36f",
                borderColor: "transparent",
              }}
              block
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default UserAccount;
