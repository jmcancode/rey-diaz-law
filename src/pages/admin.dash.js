import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TopNav from "../components/navBar";

export default function AdminDash() {
  return (
    <>
      <TopNav />
      <Container className="h-100 mt-1 mb-5">
        <Row xs={3} md={3} lg={3}>
          <Col>
            <Card>
              <Card.Body>
                <p>This is a admin dashboard sample...</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
