import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./sidebar.scss";

function Sidebar() {
  return (
    <Navbar expand="lg" id="side-nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="meun">
            <Nav.Link id="items" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="items" href="#link">
              Link
            </Nav.Link>
            <Nav.Link id="items" href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
