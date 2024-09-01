import React from "react";
import { useNavigate } from 'react-router-dom';
import cartlogo from "./assets/cartlogo.png"
import wavylogo from "./assets/wavyluckyduck.gif"

function Header(){
  const navigate = useNavigate();
  
  const handleClick = (path) => {
      navigate(path);
  };
    return(
        <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="nav-link navL1" href="javascript:void(0)" onClick={() => handleClick('/')}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <image href={wavylogo} width="100" height="100" />
        </svg>
      </a>
      <a className="nav-link navL2" href="javascript:void(0)" onClick={() => handleClick('/cart')}>
        <img src={cartlogo}/><span className="cartnum"><p>{`(0)`}</p></span>
      </a>
      </div>
  </nav>
        </div>
    );
}
export default Header;
