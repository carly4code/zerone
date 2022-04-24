import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./styles/Sidebar.scss";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Sidebar() {
  return (
    <Fade left>
      <Navbar expand="lg" id="side-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Link to="/" activeclassname="active">
                Home
              </Link>
              <Link to="/Access" activeclassname="active">
                Access
              </Link>
              <Link to="/Meun" activeclassname="active">
                Meun
              </Link>
              {/* <Nav.Link id="items" href="#home">
                Home
              </Nav.Link>
              <Nav.Link id="items" href="#link">
                Link
              </Nav.Link>
              <Nav.Link id="items" href="#link">
                Link
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Fade>
  );
}

export default Sidebar;