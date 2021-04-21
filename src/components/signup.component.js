import React, { useState, useRef } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../Firebase/context";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Yo, your passwords do not match!");
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
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          ref={firstNameRef}
          required
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          ref={lastNameRef}
          required
        />
      </div>

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
        className="btn btn-dark btn-lg btn-block"
        disabled={loading}
      >
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered? <Link to="/sign-in">log in</Link>
      </p>
    </form>
  );
}
