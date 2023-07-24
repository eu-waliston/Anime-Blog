import React from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
    return (
        <div className="navbar--component">
            <div className="logo--section">
                <h1>Anime Blog</h1>
                <Link className="members-area">Area de Membros</Link>
            </div>
            <div className="nav--section">
                <div className="navs">
                <a className="nav" href="#home">  Inicio</a>
                <span className="separator">|</span>
                <a className="nav" href="#top">Mais Votados 🔥</a>
                <span>|</span>
                <a className="nav" href="#articles">Artigos</a>
                <span>|</span>
                <a className="nav" href="#others">Outros</a>
                </div>
                <div className="input--section">
                    <  AiOutlineSearch  className="input-icon"/>
                    <input type="search" className="input" placeholder="procurar"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;