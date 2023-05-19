import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h4>Blog Logo</h4>
        </div>
      <ul className="list--itens">
        <li className="list-iten">home</li>
        <li className="list-iten">features</li>
        <li className="list-iten">elements</li>
        <li className="list-iten">membership</li>
        <li className="list-iten">more</li>
        <li className="list-iten">sign in</li>
      </ul>
      <div className="search">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search article here..." />
        </div>
    </div>
  );
};

export default Navbar;
