import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img
        className="headerPicture"
        src={"img/ALESJA.jpg"}
        alt="header with Alesja rudaja "
      />
      <h3 className="headerQuote">
        " Jag är webbutvecklare och min passion är att skapa användarvänliga
        produkter "
      </h3>
      <div className="navigationBar">
        <a
          href="https://se.linkedin.com/in/alesja-rudaja-7452a1109"
          alt="linkedin account"
        >
          <img
            className="headerIcon"
            src={"img/linkedin.png"}
            alt="linkedin "
          />
        </a>
        <a href="https://github.com/alesja1986" alt="github account">
          <img className="headerIcon" src={"img/github.png"} alt="github " />
        </a>
        <a href="/#" alt="om mig" className="linkWithText">
          OM MIG
        </a>
        <a href="/#" alt="utbildning" className="linkWithText">
          UTBILDNING
        </a>
        <a href="/#" alt="portfolio" className="linkWithText">
          PORTFOLIO
        </a>
        <a href="/#" alt="kontakt" className="linkWithText">
          KONTAKT
        </a>
      </div>
    </div>
  );
};

export default Header;
