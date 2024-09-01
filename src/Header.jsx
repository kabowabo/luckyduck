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
        <img src={wavylogo}
          width="1120" 
          height="630"/>
      </a>
      <a className="nav-link navL2" href="javascript:void(0)" onClick={() => handleClick('/cart')}>
        <img src={cartlogo}/><span className="cartnum"><p>{`(0)`}</p></span>
      </a>
      </div>
      <a className="nav-link navL4" href="javascript:void(0)" onClick={() => handleClick('/shop')}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" fill="current-color" height="22" className="bi bi-recycle" viewBox="0 0 16 16">
        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
            </svg>
          </a>
          <a className="nav-link navL4" href="javascript:void(0)" onClick={() => handleClick('/shop')}>
            <svg id="svg2" xmlns="http://www.w3.org/2000/svg" width="22" fill="current-color" height="22" className="bi bi-recycle" viewBox="0 0 16 16">
              <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
                  </svg>
                  </a>

  </nav>
        </div>
    );
}
export default Header;
