import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./landing.css"
import swatvid from "./assets/swatvid.gif"

function Landing(){
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = (path) => {
        setAnimate(true);
        setTimeout(() => {
            navigate(path);
            setAnimate(false);
        }, 300);
    };

    useEffect(() => {
        document.body.style.height = "100%";
        document.body.style.backgroundImage = `url(${swatvid})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        
        return () => {
            document.body.style.height = "";
            document.body.style.backgroundImage = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
            document.body.style.backgroundRepeat = "";
        };
    }, []);
       
    return(
        <div className={`landing`}>
            <div className="content-container">
                <nav className="linkyholder">
                    <ul>
                        <li className={`linky ${animate ? 'slide-down' : ''}`}>
                            <a href="#" onClick={() => handleClick('/shop')}>shop</a>
                        </li>
                        <li className={`linky ${animate ? 'slide-down' : ''}`}>
                            <a href="#" onClick={() => handleClick('/about')}>about</a>
                        </li>
                        <li className={`linky ${animate ? 'slide-down' : ''}`}>
                            <a href="#" onClick={() => handleClick('/contacts')}>contact us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="green-mask"></div>
        </div>
    );
}

export default Landing;
