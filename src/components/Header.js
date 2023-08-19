import React from "react";
import "./Header.css";
import icon from "../images/icons8-cart-48.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <h1>Go Kart</h1>
        <img src={icon} />
      </div>
    </div>
  );
};

export default Header;
