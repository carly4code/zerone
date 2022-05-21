import React from "react";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Sidebar() {
  return (
    <Fade left>
      <nav expand="lg" id="left-header" aria-controls="basic-navbar-nav">
        <div className="navbar-left">

          <ul>
            <li>
              <Link to="/" activeclassname="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Access" activeclassname="active">
                Access
              </Link>
            </li>
            <li>
              <Link to="/Meun" activeclassname="active">
                Meun
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fade>
  );
}

export default Sidebar;
