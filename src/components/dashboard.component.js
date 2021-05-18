import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import TopNav from "../components/navBar";

import Datetime from "react-datetime";

import dykphoto from "../assets/adrian-n-FU4yhbdRAXU-unsplash.jpg";
import newsphoto from "../assets/tingey-injury-law-firm-yCdPU73kGSc-unsplash.jpg";
import freephoto from "../assets/helena-lopes-2ozURDBsxqc-unsplash.jpg";

import { Link } from "react-router-dom";
import "react-datetime/css/react-datetime.css";
import InstagramEmbed from "react-instagram-embed";
import { db } from "../Firebase/config";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [whatsNew, setWhatsNew] = useState([]);

  useEffect(() => {
    db.collection("whatsNew").onSnapshot((snapshot) =>
      setWhatsNew(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <>
      <TopNav />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className=" container h-100 mt-3"
      >
        <Row className="d-flex align-self-stretch" xs={1} md={3} lg={3}>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={dykphoto} />
              <Card.Body>
                <Card.Title>Did you know?</Card.Title>
                <Card.Text className="text-left">
                  Learn more and share with your network.
                </Card.Text>
                <Link to="/didyouknow" style={{ color: "#bfa36f" }}>
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-1 h-100">
            {whatsNew.map(({ blogTitle, blogContent }) => (
              <Card key={whatsNew.id} className="h-100">
                <Card.Img variant="top" src={newsphoto} alt="glossary-header" />
                <Card.Body className="pb-5">
                  <Card.Title>{blogTitle}</Card.Title>
                  <Card.Text>{blogContent}</Card.Text>
                  <Link to="/whatsnew" style={{ color: "#bfa36f" }}>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col className="p-1 h-100">
            <Card className="h-100">
              <Card.Img variant="top" src={freephoto} alt="glossary-header" />
              <Card.Body className="pb-4">
                <Card.Title>Free Information</Card.Title>
                <Card.Text>
                  General knowledge from the firm. A daily, weekly, bi-annual
                  post.
                </Card.Text>
                <Link to="/whatsnew" style={{ color: "#bfa36f" }}>
                  Read more
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row noGutters={true} className="pt-3" xs={1} md={1} lg={1}>
          <Col className="pt-4">
            <h5>Request an appointment</h5>
            <Datetime
              closeOnSelect={true}
              closeOnClickOutside={true}
              dateFormat={true}
              timeFormat={true}
              value={new Date()}
            />
          </Col>
        </Row>
        <Row className="pt-3 mt-3" xs={1} md={1} lg={1}>
          <Col>
            <Card>
              <div>
                <InstagramEmbed
                  url="https://www.instagram.com/reydiazlaw"
                  clientAccessToken=""
                  maxWidth={320}
                  hideCaption={false}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {
                    alert("somethings wrong ");
                  }}
                />
              </div>
            </Card>
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
    </>
  );
}
