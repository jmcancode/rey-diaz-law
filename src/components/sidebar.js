import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { useAuth } from "../Firebase/context";
import { Alert } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

export default function SidebarExample() {
  const history = useHistory();
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout(e) {
    e.preventDefault();
    setError("");

    try {
      await logout();
      history.push("/sign-in");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Router>
      <div>
        <div
          style={{
            padding: "10px",
            height: "50vh",
            background: "#bfa36f",
            paddingTop: "10%",
            width: "35%",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link style={{ color: "#f5f5f5" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: "#f5f5f5" }} to="/bubblegum">
                Billing
              </Link>
            </li>
            <li>
              <Link style={{ color: "#f5f5f5" }} to="/shoelaces">
                Messages
              </Link>
            </li>
            <li>
              <Link style={{ color: "#f5f5f5" }} to="/shoelaces">
                Documents
              </Link>
            </li>
            <li>
              <Link style={{ color: "#f5f5f5" }} to="/shoelaces">
                Schedule
              </Link>
            </li>
            {currentUser && (
              <li style={{ color: "#f5f5f5" }} onClick={handleLogout}>
                Sign Out
              </li>
            )}
          </ul>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </Router>
  );
}
