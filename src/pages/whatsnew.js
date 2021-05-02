import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import featurephoto from "../assets/tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg";
import TopNav from "../components/navBar";

export default function WhatsNewBlog() {
  return (
    <>
      <TopNav />
      <Container fluid className="w-100 h-100 pt-3">
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Card >
              <Card.Img variant="top" src={featurephoto} />
              <Card.Body>
                <Card.Title>Whats new</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  style={{
                    backgroundColor: "#bfa36f",
                    borderColor: "transparent",
                  }}
                  variant="primary"
                >
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
