import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { HomeNav, HomeNavPage, ActiveHomeNavPage } from "./styledComponents";

import "./index.css";

// const WebsitePages = [
//   {
//     id: 1,
//     page: "Home",
//     pageUrl: "/",
//   },
//   {
//     id: 2,
//     page: "About",
//     pageUrl: "/about",
//   },
//   {
//     id: 3,
//     page: "Resume",
//     pageUrl: "/resume",
//   },
//   {
//     id: 4,
//     page: "Projects",
//     pageUrl: "/projects",
//   },
//   {
//     id: 5,
//     page: "Contact",
//     pageUrl: "/contact",
//   },
// ];

// const Navbar = (props) => {

class Navbar extends Component {
  onClickHome = () => {
    // event.preventDefault();
    const { history } = this.props;
    // history.push("/");
    history.replace("/");
    window.location.reload();
  };

  onClickAbout = () => {
    // event.preventDefault();
    const { history } = this.props;
    // history.push("/about");
    history.replace("/about");
    window.location.reload();
  };

  onClickResume = () => {
    // event.preventDefault();
    const { history } = this.props;
    // history.push("/resume");
    history.replace("/resume");
    window.location.reload();
  };

  onClickProjects = () => {
    // event.preventDefault();
    const { history } = this.props;
    // history.push("/projects");
    history.replace("/projects");
    window.location.reload();
  };

  onClickContact = () => {
    // event.preventDefault();
    const { history } = this.props;
    // history.push("/contact");
    history.replace("/contact");
    window.location.reload();
  };

  render() {
    const { active } = this.props;
    return (
      //   <HomeNav>
      //     {WebsitePages.map((each) => (
      //       <Link
      //         to={each.pageUrl}
      //         //   onClick={() => window.location.reload()}
      //         onClick={this.changePage}
      //         className="page-link"
      //         key={each.id}
      //       >
      //         {active === each.id ? (
      //           <ActiveHomeNavPage>{each.page}</ActiveHomeNavPage>
      //         ) : (
      //           <HomeNavPage>{each.page}</HomeNavPage>
      //         )}
      //       </Link>
      //     ))}
      //   </HomeNav>
      // -----------------------------2
      // {/* <Link to={page} className="page-link">
      //   {activeTab && <ActiveHomeNavPage>{page}</ActiveHomeNavPage>}
      //   {!activeTab && <HomeNavPage>{page}</HomeNavPage>}
      // </Link> */}
      // -----------------------------1
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
