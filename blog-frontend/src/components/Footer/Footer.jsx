import React from "react";
import "./Footer.css"
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsReddit,
  BsDiscord,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="social">
        <div className="social--media--sec">
          <div >
            <h1 className="social-text">Nos siga em nossas redes Sociais</h1>
          </div>
          <div className="social-medias">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsReddit />
            <BsDiscord />
          </div>
        </div>
        <div className="dev--section">
          <p className="dev">
            Desenvolvido por <sapn id="span">We Santos</sapn>:
          </p>
          <a href=""><BsGithub className="hub"  /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
