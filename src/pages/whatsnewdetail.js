import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { db } from "../Firebase/config";
import image from "../assets/adrian-n-FU4yhbdRAXU-unsplash.jpg";

export default function WhatsNewDetail() {
  const [whatsNew, setWhatsNew] = useState("");

  useEffect(() => {
    db.collection("whatsNew").onSnapshot((snapshot) =>
      setWhatsNew(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            {whatsNew.map(({ doc, blogTitle, blogContent }) => (
              <Card key={doc.id}>
                <Card.Img src={image} alt="card image" />
                <Card.Title>{blogTitle}</Card.Title>
                <Card.Body>{blogContent}</Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
 