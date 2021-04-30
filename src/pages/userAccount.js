import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopNav from "../components/navBar";

const UserAccount = () => {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col>
            <p className="text-white text-center">User account page</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserAccount;
