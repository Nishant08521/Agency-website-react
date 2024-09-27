import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="navbar">
        <a href="/">
          <img
            className="navbar-logo"
            src="https://agency-website72.netlify.app/static/media/logo.png.9ef55d7e1433d3cd3b35974538e2b7f6.svg"
            alt=""
          />
        </a>
        <h3>agency@email.com</h3>
      </div>
    </div>
  );
};

export default Navbar;
