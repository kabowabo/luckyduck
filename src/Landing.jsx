import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./landing.css";
import swatvid from "./assets/swatvid.gif";

const Landing = () => {
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
    document.body.style.cssText = `
      height: 100%;
      background-image: url(${swatvid});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;
    return () => {
      document.body.style.cssText = '';
    };
  }, []);

  return (
    <div className="brand-background flex justify-center items-center">
      <div className="grid justify-items-center gap-5">
        <div className="logo-title pointer-events-none absolute top-0 -left-1/4 -right-1/4 text-center text-[35px] font-sans font-bold leading-8 pt-5">
          derschutze
        </div>

        <img 
          src="/path/to/logo.webp" 
          alt="logo" 
          id="logo-image" 
          className="aspect-square" 
          width="200" 
          height="200" 
        />

        <div className="newsletter-container bg-background/90 data-[highlight]:border-yellow-500 data-[highlight]:opacity-90 text-foreground z-10 relative w-full border-2 border-neutral-500">
          <div className="flex items-center has-[:focus]:before:content-['Email:_'] before:px-1 before:bg-background/90 before:absolute before:-left-1 before:-translate-x-full">
            {/* SVG icon can be added here */}
          </div>
        </div>

        <div className="bg-background/90 z-10 relative max-w-md w-full drop-shadow-custom font-semibold border-2 border-neutral-500">
          <div className="flex items-center flex-col pt-8">
            <div className="flex flex-col gap-2 text-sm mb-5">
              {['shop', 'lookbook', 'archive', 'shipping', 'contact', 'retail stores', 'stickers'].map((item) => (
                <a 
                  key={item}
                  className={`w-full group px-2 ${animate ? 'slide-down' : ''}`}
                  href="javascript:void(0)" 
                  onClick={() => handleClick(`/${item.replace(' ', '-')}`)}
                >
                  <span className="group-hover:bg-ghost group-hover:text-background">{item}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-row gap-x-4.5 m-2">
              {/* Social media icons can be added here */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pb-1 pr-1 text-xs font-thin flex flex-row gap-1 opacity-70 text-neutral-300">
        {['terms of service', 'legal notice', 'privacy', 'refund'].map((item, index) => (
          <React.Fragment key={item}>
            <a 
              href={`/policies/${item.replace(' ', '-')}`}
              className="hover:underline data-[selected]:underline hover:text-foreground data-[selected]:text-foreground"
            >
              {item}
            </a>
            {index < 3 && <span className="opacity-70">•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Landing;
