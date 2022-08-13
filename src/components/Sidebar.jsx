import React from "react";
import { Link } from 'react-router-dom';

import useMediaQuery from "../hooks/useMediaQuery";


function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (

      <nav expand="lg" className={
        isMobile ? "left-header hide" : "left-header"
      }
        aria-controls="basic-navbar-nav">
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
            <li>
              <Link to="/Shop" activeclassname="active">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>

  );
}

export default Sidebar;
