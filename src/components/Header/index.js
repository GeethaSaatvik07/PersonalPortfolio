import { Link, withRouter } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { AiOutlineClose } from "react-icons/ai";
// import Popup from "reactjs-popup";

import {
  HeaderNav,
  HeaderName,
  //   MenuButton,
  //   MenuPopup,
  //   MenuPopupList,
} from "./styledComponents";

import Navbar from "../Navbar";
import HeaderMenuButton from "../HeaderMenuButton";

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
      <HeaderMenuButton active={activeTab} />
    </HeaderNav>
  );
};

export default withRouter(Header);
