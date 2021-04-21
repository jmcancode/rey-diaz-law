import React from "react";
import logo from "../assets/Rey-Diaz-Logo-White.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            <Image src={logo} width={250} fluid />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-muted" to={"./sign-in"}>
                  Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to={"/sign-in"}>
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
