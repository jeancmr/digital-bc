import React from "react";
import cardImg from "../images/card-image.png";
import email from "../images/mail.png";
import linkendin from "../images/linkedin.png";

export default function Header() {
  return (
    <header>
      <img
        src={cardImg}
        alt="Picture of the business card"
        className="card-img"
      />
      <h2>Laura Smith</h2>
      <h2>Frontend Developer</h2>
      <p>laurasmith.website</p>
      <a href="#">
        <img src={email} alt="email logo" className="btn-icon" />
        Email
      </a>
      <a href="#">
        <img src={linkendin} alt="linkendin logo" className="btn-icon" />
        LinkedIn
      </a>
    </header>
  );
}
