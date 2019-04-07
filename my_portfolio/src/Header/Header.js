import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openClouseNav = this.openClouseNav.bind(this);
    this.state = {
      openedNav: false,
      showLinks: "none"
    };
  }

  openClouseNav = () => {
    const currentState = this.state.openedNav;
    this.setState({ openedNav: !currentState });

    if (!this.state.openedNav) {
      this.setState({ showLinks: "block" });
    } else this.setState({ showLinks: "none" });
    console.log(this.state);
  };

  render() {
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
          <span>
            <i
              className={this.state.openedNav ? "fa fa-times" : "fa fa-bars"}
              onClick={this.openClouseNav}
            />
          </span>
          <div className="linkDiv" style={{ display: this.state.showLinks }}>
            <li>
              <a href="/#" alt="om mig" className="linkWithText">
                OM MIG
              </a>{" "}
            </li>
            <li>
              <a href="/#" alt="utbildning" className="linkWithText">
                UTBILDNING
              </a>
            </li>
            <li>
              <a href="/#" alt="portfolio" className="linkWithText">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="/#" alt="kontakt" className="linkWithText">
                KONTAKT
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
