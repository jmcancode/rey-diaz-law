import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TopNav from "../components/navBar";

const UserInbox = () => {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col>
            <p className="text-white text-center"> User inbox</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserInbox;
