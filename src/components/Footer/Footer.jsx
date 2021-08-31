import React from "react";

import "./Footer.styles.css";

function Footer() {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        © Jason Hsieh &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
