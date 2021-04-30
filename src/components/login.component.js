import React, { useState, useRef } from "react";
import { useAuth } from "../Firebase/context";
import { useHistory, Link } from "react-router-dom";
import { Alert, Container, Form, Card, Image, Row, Col } from "react-bootstrap";
import loginLogo from "../assets/Rey-Diaz-Logos-Blue.png";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in. Are you sure you registered?");
    }

    setLoading(false);
  }

  return (
    <Container className=" mt-5 pt-5">
      <Row xs={1} md={1} lg={1}>
        <Col>
          <Image fluid src={loginLogo} className="w-100 p-5" />
        </Col>
        <Col>
          <h2 className="text-center text-uppercase text-muted pb-2">
            Client Portal
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card body>
            <Form onSubmit={handleSubmit}>
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block"
                disabled={loading}
              >
                Sign in
              </button>
              {error && <Alert variant="danger">{error}</Alert>}
              <p className="forgot-password text-right">
                Need an account? Sign-up <Link to="sign-up">here</Link>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
