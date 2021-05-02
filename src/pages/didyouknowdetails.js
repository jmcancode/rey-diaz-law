import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TopNav from "../components/navBar";
import featurePhoto from "../assets/adrian-n-FU4yhbdRAXU-unsplash.jpg";
import { FiShare, FiSave, FiPlus } from "react-icons/fi";
export default function DidYouKnowDetail() {
  return (
    <>
      <TopNav />
      <Container className="w-100 pt-3">
        <Image src={featurePhoto} width="100%" />
        <Row xs={1} md={1} lg={1} className="pt-3">
          <Col>
            <p
              style={{ fontWeight: "bolder" }}
              className="display-4 text-uppercase"
            >
              Did you know?{" "}
            </p>
            <p style={{ fontWeight: "bold" }} className="display-5 text-left">
              2021 Texas State Road Laws
            </p>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1}>
          <Col>
            <p className="text-left">
              Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi,
              pretium ut lacinia in, elementum id enim. Curabitur aliquet quam
              id dui posuere blandit. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
              <br />
              <br />
              Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget
              malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed
              sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Cras ultricies ligula sed
              magna dictum porta. Nulla quis lorem ut libero malesuada feugiat.
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              a. Sed porttitor lectus nibh. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Nulla porttitor accumsan
              tincidunt.{" "}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="h-10 text-center">
        <Row className="pt-4 pb-3" xs={3} md={3} lg={3}>
          <Col></Col>
          <Col>
            <p>
              Share <FiShare />
            </p>
          </Col>
          <Col>
            <p>
              Follow Us <FiPlus />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
