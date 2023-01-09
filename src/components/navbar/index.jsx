import React from "react";
import Toggle from "../toggle";
import "./style.css";
import { Link } from "react-scroll";

function Navbar() {
  return <div className="n-wrapper" id="navbar">
    <div className="n-left">
      <div className="n-name">Mahmoud</div>
      <Toggle />
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul>
          <li><Link activeClass="active" to="navbar" spy={true} smooth={true}>Home</Link></li>
          <li><Link to="services" spy={true} smooth={true}>Services</Link></li>
          <li><Link to="experience" spy={true} smooth={true}>Experience</Link></li>
          <li><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
          <li><Link to="testimonials" spy={true} smooth={true}>Testimonials</Link></li>
        </ul>
      </div>
      <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
      </Link>
    </div>
  </div>;
}

export default Navbar;
