import React from "react";
import fbIcon from "../images/fb-icon.png";
import ghIcon from "../images/gh-icon.png";
import igIcon from "../images/ig-icon.png";
import twIcon from "../images/tw-icon.png";

export default function Footer() {
  return (
    <footer>
      <nav className="img-list">
        <img src={fbIcon} alt="facebook logo" className="social-icon" />
        <img src={ghIcon} alt="github logo" className="social-icon" />
        <img src={igIcon} alt="instagram logo" className="social-icon" />
        <img src={twIcon} alt="twitter logo" className="social-icon" />
      </nav>
    </footer>
  );
}
