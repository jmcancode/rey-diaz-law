import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useAuth } from "../Firebase/context";
import { Alert } from "react-bootstrap";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div style={{ color: "#c02626" }}>Home</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    sidebar: () => <div style={{ color: "#c02626" }}>Billing</div>,
    main: () => <h2>Billing</h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div style={{ color: "#c02626" }}>Tickets 🎫 </div>,
    main: () => <h2>Tickets 🎫 </h2>,
  },
];

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
      <div style={{ display: "flex" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: "10px",
            width: "15%",
            height: "100vh",
            background: "#bfa36f",
            paddingTop: "10%",
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
