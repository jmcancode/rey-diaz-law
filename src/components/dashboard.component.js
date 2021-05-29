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
  const [freeInfo, setFreeInfo] = useState([]);
  const [dyk, setDyk] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("whatsNew")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) =>
        setWhatsNew(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    db.collection("dyk")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) =>
        setDyk(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    db.collection("freeInformation")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) =>
        setFreeInfo(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <TopNav />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className=" container mt-3"
      >
        <Row xs={1} md={3} lg={3}>
          <Col className="p-1 h-auto">
            {dyk.map(({ title, content, index }) => (
              <Card key={index}>
                <Card.Img
                  className="pb-2"
                  variant="top"
                  src={dykphoto}
                  alt="did you know?"
                />
                <Card.Body>
                  <Card.Title className="text-uppercase">
                    <h5>{title}</h5>
                  </Card.Title>
                  <Card.Text className="text-left">{content}</Card.Text>
                  <Link to="/didyouknow" style={{ color: "#bfa36f" }}>
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col className="p-1 h-auto">
            {whatsNew.map(({ blogTitle, blogContent, index }) => (
              <Card key={index} style={{ height: "100%" }}>
                <Card.Img variant="top" src={newsphoto} alt="glossary-header" />
                <Card.Body className="pb-5">
                  <Card.Title className="text-uppercase">
                    <h5>{blogTitle}</h5>
                  </Card.Title>
                  <Card.Text>{blogContent}</Card.Text>
                  <Link to="/whatsnew" style={{ color: "#bfa36f" }}>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col className="p-1 h-auto">
            {freeInfo.map(({ blogTitle, blogContent, index }) => (
              <Card key={index} style={{ height: "100%" }}>
                <Card.Img variant="top" src={freephoto} alt="glossary-header" />
                <Card.Body className="pb-4">
                  <Card.Title className="text-uppercase">
                    <h5>{blogTitle}</h5>
                  </Card.Title>
                  <Card.Text>{blogContent}</Card.Text>
                  <Link to="/freeinfo" style={{ color: "#bfa36f" }}>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            ))}
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
              <div className="h-100">
                <InstagramEmbed
                  url="https://www.instagram.com/reydiazlaw"
                  clientAccessToken="2926655620880947"
                  maxWidth={320}
                  hideCaption={false}
                  containerTagName="div"
                  protocol=""
                  injectScript
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {
                    alert("somethings gone wrong");
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
