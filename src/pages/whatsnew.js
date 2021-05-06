import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import featurephoto from "../assets/tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg";
import TopNav from "../components/navBar";

import { db } from "../Firebase/config";

export default function WhatsNewBlog() {
  const [whatsNew, setWhatsNew] = useState("");

  useEffect(() => {
    db.collection("whatsNew").onSnapshot((snapshot) =>
      setWhatsNew(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <>
      <TopNav />
      <Container fluid className="w-100 h-100 pt-3">
        <Row xs={1} md={1} lg={1}>
          <Col>
            <Card>
              <Card.Img variant="top" src={featurephoto} />
              <Card.Body>
                {whatsNew.map(({ blogTitle }) => (
                  <Card.Title>{blogTitle}</Card.Title>
                ))}
                {whatsNew.map(({ blogContent }) => (
                  <Card.Text>{blogContent}</Card.Text>
                ))}
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
