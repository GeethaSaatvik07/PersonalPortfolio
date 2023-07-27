import { Link, withRouter } from "react-router-dom";
import { HeaderNav, HeaderName } from "./styledComponents";

import Navbar from "../Navbar";

// const WebsitePages = [
//   {
//     id: 1,
//     page: "Home",
//   },
//   {
//     id: 2,
//     page: "About",
//   },
//   {
//     id: 3,
//     page: "Resume",
//   },
//   {
//     id: 4,
//     page: "Projects",
//   },
//   {
//     id: 5,
//     page: "Contact",
//   },
// ];

const Header = (props) => {
  const { activeTab } = props;
  const onClickHome = () => {
    // event.preventDefault();
    const { history } = props;
    // history.push("/");
    history.replace("/");
    window.location.reload();
  };
  return (
    <HeaderNav>
      <Link to="/" className="page-link" onClick={onClickHome}>
        <HeaderName>Geetha Saatvik Adepu</HeaderName>
      </Link>
      <Navbar active={activeTab} />
    </HeaderNav>
  );
};

export default withRouter(Header);
