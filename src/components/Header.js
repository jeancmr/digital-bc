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
      <h2 className="card-name">Laura Smith</h2>
      <h3 className="card-job">Frontend Developer</h3>
      <p className="card-web">laurasmith.website</p>
      <nav className="btns">
        <a className="btn btn-email" href="#">
          <img src={email} alt="email logo" className="btn-icon" />
          <span>Email</span>
        </a>
        <a className="btn btn-linkedin" href="#">
          <img src={linkendin} alt="linkendin logo" className="btn-icon" />
          <span>LinkedIn</span>
        </a>
      </nav>
    </header>
  );
}
