import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Apple } from 'lucide-react';

const DerSchutzePage = () => {
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
    document.body.style.backgroundImage = `url(//derschutze.com/cdn/shop/files/logo_HIGH.webp?v=1717423387&width=400)`;
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

  return (
    <div className="brand-background flex justify-center items-center h-screen">
      <div className="grid justify-items-center gap-5">
        <h1 className="logo-title pointer-events-none absolute top-0 -left-1/4 -right-1/4 text-center text-[35px] font-sans font-bold leading-8 pt-5">
          derschutze
        </h1>

        <div className="bg-background/90 z-10 relative max-w-md w-full drop-shadow-custom font-semibold border-2 border-neutral-500">
          <div className="flex items-center flex-col pt-8">
            <div className="flex flex-col gap-2 text-sm mb-5">
              {[
                { name: 'shop', path: '/shop' },
                { name: 'lookbook', path: '/lookbook' },
                { name: 'archive', path: '/pages/archive' },
                { name: 'shipping', path: '/pages/shipping' },
                { name: 'contact', path: '/contacts' },
                { name: 'retail stores', path: '/pages/retail-stores' },
                { name: 'stickers', path: '/pages/stickers' },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`linky ${animate ? 'slide-down' : ''}`}
                >
                  <a
                    href="javascript:void(0)"
                    onClick={() => handleClick(item.path)}
                    className="w-full group px-2 block"
                  >
                    <span className="group-hover:bg-ghost group-hover:text-background">
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-x-4.5 m-2">
              <SocialIcon href="https://www.facebook.com/derschutzeclo/" Icon={Facebook} />
              <SocialIcon href="https://www.instagram.com/derschutze_clo/" Icon={Instagram} />
              <SocialIcon href="https://twitter.com/derschutze_clo" Icon={Twitter} />
              <SocialIcon href="https://apps.apple.com/us/app/derschutze/id1567782871" Icon={Apple} />
              <SocialIcon href="https://www.tiktok.com/@derschutze?lang=en" Icon={TikTokIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pb-1 pr-1 text-xs font-thin flex flex-row gap-1 opacity-70 text-neutral-300">
        <FooterLink href="/policies/terms-of-service" text="terms of service" />
        <span className="opacity-70">•</span>
        <FooterLink href="/policies/legal-notice" text="legal notice" />
        <span className="opacity-70">•</span>
        <FooterLink href="/policies/privacy-policy" text="privacy" />
        <span className="opacity-70">•</span>
        <FooterLink href="/policies/refund-policy" text="refund" />
      </div>
      <div className="green-mask"></div>
    </div>
  );
};

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    className="flex fill-neutral-500 items-end cursor-pointer hover:fill-ghost"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-4.5 h-4.5" />
  </a>
);

const TikTokIcon = (props) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const FooterLink = ({ href, text }) => (
  <a
    href={href}
    className="hover:underline data-[selected]:underline hover:text-foreground data-[selected]:text-foreground"
  >
    {text}
  </a>
);

export default DerSchutzePage;
