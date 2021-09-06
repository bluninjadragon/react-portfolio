import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./Footer.styles.css";

function Footer() {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        © Jason Hsieh &nbsp; {new Date().getFullYear()}
        <div>
          <a href="https://www.linkedin.com/in/jason-hsieh-86023b27/">LinkedIn</a>
        <a href="https://github.com/bluninjadragon?tab=repositories">GitHub</a>
        <a href="https://www.youtube.com/channel/UCs8PrjbILTRLDs8jFacrIlw">Youtube</a>
      </div>
        </div>
      
    </div>
  );
};

export default Footer;
