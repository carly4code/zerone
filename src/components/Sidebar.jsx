import React from "react";
// import { Navbar, Nav } from "react-bootstrap";

import "./styles/Sidebar.scss";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Sidebar() {
  return (
    <Fade left>
      <nav expand="lg" id="left-header" aria-controls="basic-navbar-nav">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse> */}
            <div className="navbar-left">
              <Link to="/" activeclassname="active">
                Home
              </Link>
              <Link to="/Access" activeclassname="active">
                Access
              </Link>
              <Link to="/Meun" activeclassname="active">
                Meun
              </Link>
            </div>
          {/* </Navbar.Collapse> */}
      </nav>
    </Fade>
  );
}

export default Sidebar;
