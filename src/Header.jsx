import React from "react";
import { useNavigate } from 'react-router-dom';
import cartlogo from "./assets/cartlogo.png";
import wavylogo from "./assets/wavyluckyduck.gif";

function Header() {
  const navigate = useNavigate();
  
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Home link with logo */}
          <a 
            className="nav-link navL1" 
            href="javascript:void(0)" 
            onClick={() => handleClick('/')}
          >
            <svg 
              width="1120px" 
              height="630px" 
              viewBox="0 0 560 315" 
              preserveAspectRatio="xMidYMid meet"
            >
              <image href={wavylogo} width="560" height="315" />
            </svg>
          </a>

          {/* Cart link */}
          <a 
            className="nav-link navL2" 
            href="javascript:void(0)" 
            onClick={() => handleClick('/cart')}
          >
            <img src={cartlogo} alt="Cart" />
            <span className="cartnum">
              <p>(0)</p>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
