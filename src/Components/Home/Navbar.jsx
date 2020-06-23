import React from "react";
import logo from "./logo.svg";
import { withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      style={{ "z-index": "2" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <a
        className="navbar-brand"
        href="#"
        onClick={() => props.history.push("/")}
      >
        crashPlanner
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        role="dialog"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/login">
              Login <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/signup">
              Sign-up <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
