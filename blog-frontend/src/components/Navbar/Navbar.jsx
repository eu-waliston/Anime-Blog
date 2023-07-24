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
                <Link className="nav" >Inicio</Link>
                <span>|</span>
                <Link className="nav" >Artigos</Link>
                
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