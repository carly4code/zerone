import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import $ from 'jquery';

import useMediaQuery from "../hooks/useMediaQuery";


$('.mobile-menu-button').click (function(){
  $(this).toggleClass('clicked');
});

function MobileHeader() {
  return (
    <nav className="top-header">
      <a href="#">
        <div className={'logo2'}></div>
      </a>
      <div className="mobile-menu-button">
      <div class="icon"></div>
      {/* expended nav bar items */}
      <div>
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
          {/* expended nav bar items */}
      </div>
    
</nav>
  );
}

function DesktopHeader() {
  //-----change header logo while loading finished --------
  const [navbar, setNavbar] = useState(false);

  const changeIogo = () => {
    if (window.scrollY >= 1000) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeIogo);
  //-----change header logo while loading finished --------
  

  return (
      <nav expand="lg" className="top-header">
        <a href="#">
          <div className={navbar ? 'logo1' : 'logo2'}></div>
        </a>
  
        <div className="content">
          <div>
            83 Wellington Street, Central, Hong Kong
          </div>
        </div>
        <div className="content">
          <div>Mon - Fri | 07:30 - 19:00</div>
          <div>Sat - Sun | 08:30 - 19:00</div>
        </div>
        <div className="content">
          <a href="#">
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24818 10V5.44595H4.72901L4.94912 3.66289H3.24818V2.52716C3.24818 2.01263 3.38635 1.66036 4.09812 1.66036H5V0.0706607C4.56118 0.0218702 4.1201 -0.00168805 3.67877 9.3996e-05C2.36986 9.3996e-05 1.47119 0.829113 1.47119 2.35102V3.65956H0V5.44262H1.4744V10H3.24818Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99866 2.43452C3.57897 2.43452 2.43322 3.58029 2.43322 5C2.43322 6.41971 3.57897 7.56548 4.99866 7.56548C6.41834 7.56548 7.56409 6.41971 7.56409 5C7.56409 3.58029 6.41834 2.43452 4.99866 2.43452ZM4.99866 6.66738C4.08055 6.66738 3.33131 5.91812 3.33131 5C3.33131 4.08188 4.08055 3.33262 4.99866 3.33262C5.91676 3.33262 6.666 4.08188 6.666 5C6.666 5.91812 5.91676 6.66738 4.99866 6.66738ZM7.66916 1.73154C7.33769 1.73154 7.07002 1.99922 7.07002 2.3307C7.07002 2.66217 7.33769 2.92985 7.66916 2.92985C8.00063 2.92985 8.2683 2.66342 8.2683 2.3307C8.2684 2.25199 8.25297 2.17403 8.2229 2.10129C8.19282 2.02856 8.14869 1.96247 8.09304 1.90681C8.03738 1.85115 7.9713 1.80702 7.89856 1.77695C7.82582 1.74687 7.74787 1.73144 7.66916 1.73154ZM9.99944 5C9.99944 4.30953 10.0057 3.62532 9.96692 2.93611C9.92815 2.13556 9.74553 1.42508 9.16014 0.839689C8.57351 0.253043 7.86429 0.0716702 7.06376 0.032894C6.37331 -0.00588219 5.68911 0.000372057 4.99991 0.000372057C4.30945 0.000372057 3.62525 -0.00588219 2.93605 0.032894C2.13552 0.0716702 1.42506 0.254294 0.839674 0.839689C0.253038 1.42634 0.0716689 2.13556 0.0328934 2.93611C-0.00588208 3.62657 0.00037205 4.31078 0.00037205 5C0.00037205 5.68922 -0.00588208 6.37468 0.0328934 7.06389C0.0716689 7.86444 0.254289 8.57491 0.839674 9.16031C1.42631 9.74696 2.13552 9.92833 2.93605 9.96711C3.6265 10.0059 4.3107 9.99963 4.99991 9.99963C5.69036 9.99963 6.37456 10.0059 7.06376 9.96711C7.86429 9.92833 8.57476 9.74571 9.16014 9.16031C9.74678 8.57366 9.92815 7.86444 9.96692 7.06389C10.0069 6.37468 9.99944 5.69047 9.99944 5ZM8.89872 7.94949C8.80741 8.17715 8.69734 8.34726 8.52097 8.52238C8.3446 8.69875 8.17574 8.80882 7.94809 8.90014C7.29016 9.16156 5.72788 9.10277 4.99866 9.10277C4.26943 9.10277 2.7059 9.16156 2.04797 8.90139C1.82032 8.81007 1.65021 8.7 1.47509 8.52363C1.29873 8.34726 1.18865 8.1784 1.09734 7.95074C0.837172 7.29155 0.895961 5.72924 0.895961 5C0.895961 4.27076 0.837172 2.7072 1.09734 2.04926C1.18865 1.8216 1.29873 1.65149 1.47509 1.47637C1.65146 1.30125 1.82032 1.18993 2.04797 1.09861C2.7059 0.838438 4.26943 0.897228 4.99866 0.897228C5.72788 0.897228 7.29141 0.838438 7.94935 1.09861C8.17699 1.18993 8.34711 1.3 8.52222 1.47637C8.69859 1.65274 8.80866 1.8216 8.89997 2.04926C9.16014 2.7072 9.10135 4.27076 9.10135 5C9.10135 5.72924 9.16014 7.29155 8.89872 7.94949Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </nav>

  );
}


const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return(
  <Fade top>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      </Fade>
  );
}

export default Header;




