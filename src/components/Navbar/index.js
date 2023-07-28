import { Component } from "react";
// import {FiMenu} from 'react-icons/fi'
import { Link, withRouter } from "react-router-dom";
import { HomeNav, HomeNavPage, ActiveHomeNavPage } from "./styledComponents";

import "./index.css";

class Navbar extends Component {
  onClickHome = () => {
    const { history } = this.props;
    history.replace("/");
    window.location.reload();
  };

  onClickAbout = () => {
    const { history } = this.props;
    history.replace("/about");
    window.location.reload();
  };

  onClickResume = () => {
    const { history } = this.props;
    history.replace("/resume");
    window.location.reload();
  };

  onClickProjects = () => {
    const { history } = this.props;
    history.replace("/projects");
    window.location.reload();
  };

  onClickContact = () => {
    const { history } = this.props;
    history.replace("/contact");
    window.location.reload();
  };

  render() {
    const { active } = this.props;
    return (
      <HomeNav>
        <Link to="/" className="page-link" onClick={this.onClickHome}>
          {active === "Home" ? (
            <ActiveHomeNavPage>Home</ActiveHomeNavPage>
          ) : (
            <HomeNavPage>Home</HomeNavPage>
          )}
        </Link>
        <Link to="/about" className="page-link" onClick={this.onClickAbout}>
          {active === "About" ? (
            <ActiveHomeNavPage>About</ActiveHomeNavPage>
          ) : (
            <HomeNavPage>About</HomeNavPage>
          )}
        </Link>
        <Link to="/resume" className="page-link" onClick={this.onClickResume}>
          {active === "Resume" ? (
            <ActiveHomeNavPage>Resume</ActiveHomeNavPage>
          ) : (
            <HomeNavPage>Resume</HomeNavPage>
          )}
        </Link>
        <Link
          to="/projects"
          className="page-link"
          onClick={this.onClickProjects}
        >
          {active === "Projects" ? (
            <ActiveHomeNavPage>Projects</ActiveHomeNavPage>
          ) : (
            <HomeNavPage>Projects</HomeNavPage>
          )}
        </Link>
        <Link to="/contact" className="page-link" onClick={this.onClickContact}>
          {active === "Contact" ? (
            <ActiveHomeNavPage>Contact</ActiveHomeNavPage>
          ) : (
            <HomeNavPage>Contact</HomeNavPage>
          )}
        </Link>
      </HomeNav>
    );
  }
}

export default withRouter(Navbar);
