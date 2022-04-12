import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./sidebar.scss";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Sidebar() {
  return (
    <Fade left>
      <Navbar expand="lg" id="side-nav">
        <Container class="inner-item">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="meun">
              <Link to="/" activeclassname="active" id="items">
                Home
              </Link>
              <Link to="/Access" activeclassname="active" id="items">
                Access
              </Link>
              <Link to="/Meun" activeclassname="active" id="items">
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
        </Container>
      </Navbar>
    </Fade>
  );
}

export default Sidebar;
