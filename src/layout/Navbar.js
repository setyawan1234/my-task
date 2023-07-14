import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Company</div>
      <ul className="nav-links">
        {/* dropdown navbar */}
        <li className="dropdown">
            <a className="dropdown-toggle">
              ABOUT
            </a>

          <ul className="dropdown-menu">
              <li>
                <a href="#history">HISTORY</a>
              </li>
              <li>
                <a href="#vision-mission">VISION MISSION</a>
              </li>
            </ul>
        </li>

        <li>
            <a href="#our-work">OUR WORK</a>
        </li>

        <li>
            <a href="#our-team">OUR TEAM</a>
        </li>

        <li>
            <a href="#contact">CONTACT</a>
        </li>

      </ul>
    </nav>
  );
}
