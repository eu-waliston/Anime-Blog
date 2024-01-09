import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar--component">
      <div className="logo--section">
        <div className="navs">
          <a className="nav" href="#home">
            {" "}
            Inicio
          </a>
          <span className="separator">|</span>
          <a className="nav" href="#top">
            Mais Votados 🔥
          </a>
          <span>|</span>
          <a className="nav" href="#articles">
            Galeria
          </a>
          <span>|</span>
          <a className="nav" href="#others">
            Outros
          </a>
        </div>
      </div>
      <div className="nav--section">
        <div className="input--section">
          <AiOutlineSearch className="input-icon" />
          <input type="search" className="input" placeholder="Procurar..." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
