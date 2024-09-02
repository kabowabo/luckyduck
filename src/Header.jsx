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
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
      }}>
        {/* Home link with logo */}
        <a 
          className="nav-link navL1" 
          href="javascript:void(0)" 
          onClick={() => handleClick('/')}
          style={{ flexGrow: 1 }}
        >
          <svg 
            width="560px" 
            height="315px" 
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
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          <div style={{ 
            width: '40px', 
            height: '40px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img 
              src={cartlogo} 
              alt="Cart" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain' 
              }} 
            />
          </div>
          <span className="cartnum" style={{ marginLeft: '5px' }}>(0)</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
