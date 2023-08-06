import { Component } from "react";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  HomePageWithMenu,
  HomePage,
  HomeContainer,
  HomeName,
  HomeLine,
  RoleSpan,
  //   HomeNav,
  HomeSocialNetworks,
} from "./styledComponents";

import Navbar from "../Navbar";
import HeaderMenuButton from "../HeaderMenuButton";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <HomePageWithMenu>
          <HeaderMenuButton className="menu-home" active={"Home"} />
          {/* <HeaderMenuButton className="menu-home" /> */}
          <HomePage>
            {/* <HeaderMenuButton className="menu-home" /> */}
            <HomeContainer>
              <HomeName>Geetha Saatvik Adepu</HomeName>
              <HomeLine>
                I'm a passionate <RoleSpan>full-stack web developer</RoleSpan>{" "}
                from India
              </HomeLine>
              {/* <HomeNav>
          {WebsitePages.map((each) => (
            <Navbar key={each.id} pageDetails={each} active={1} />
          ))}
        </HomeNav> */}
              <Navbar active={"Home"} className="show-navbar" />
              <HomeSocialNetworks>
                <a
                  href="https://www.linkedin.com/in/geethasaatvikadepu/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social"
                >
                  <BsLinkedin className="home-social-logo" />
                </a>
                <a
                  href="https://www.instagram.com/_geetha.saatvik_/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social"
                >
                  <BsInstagram className="home-social-logo" />
                </a>
                <a
                  href="https://twitter.com/Geethasaatvik"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social"
                >
                  <BsTwitter className="home-social-logo" />
                </a>
              </HomeSocialNetworks>
            </HomeContainer>
          </HomePage>
        </HomePageWithMenu>
      </>
    );
  }
}

export default Home;
