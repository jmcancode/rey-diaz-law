import React, { useState, useRef } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../Firebase/context";
import { Link, useHistory } from "react-router-dom";
import { Form, Row, Col, Image, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import loginLogo from "../assets/Rey-Diaz-Logos-Blue.png";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Sorry, your passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="container"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Row xs={1} md={1} lg={1} className="text-center">
          <Col sm>
            <Image
              fluid
              src={loginLogo}
              style={{ width: "45%", height: "100%" }}
            />
          </Col>
        </Row>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="container"
      >
        <Card body>
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center text-uppercase">Register</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                ref={emailRef}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                ref={passwordConfirmRef}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block text-uppercase"
              disabled={loading}
            >
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered? <Link to="/sign-in">log in</Link>
            </p>
          </Form>
        </Card>
      </motion.div>
    </>
  );
}
