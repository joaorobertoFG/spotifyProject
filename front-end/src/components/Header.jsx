import React from "react";
import logoSpotify from "../assets/logo/spotify-logo-branco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logoSpotify} alt="logo do spotify" />
        </Link>
      </div>
      <div className="header-center">
        <Link to="/">
          <FontAwesomeIcon className="house" icon={faHouse} />
        </Link>
        <div className="header__search">
          <FontAwesomeIcon className="header__search--lupa" icon={faMagnifyingGlass} />
          <input
            className="search"
            type="text"
            placeholder="O que dejesa ouvir?"
          />
        </div>
      </div>
      <div className="header-right">
        <p>Inscrever-se</p>
        <Link to="/" className="header__link">
          <h1>Entrar</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
