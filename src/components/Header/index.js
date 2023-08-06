import { Link, withRouter } from "react-router-dom";

import {
  HeaderNav,
  HeaderName,
  HeaderLogo,
  HeaderNameAndLogo,
} from "./styledComponents";

import Navbar from "../Navbar";
import HeaderMenuButton from "../HeaderMenuButton";

const Header = (props) => {
  const { activeTab } = props;
  const onClickHome = () => {
    const { history } = props;
    history.replace("/");
    window.location.reload();
  };
  return (
    <HeaderNav>
      <Link to="/" className="page-link" onClick={onClickHome}>
        <HeaderNameAndLogo>
          <HeaderLogo
            src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1691180175/Geetha-Saatvik-AdepU_g7bvzr.webp"
            alt="logo"
          />
          <HeaderName>Geetha Saatvik</HeaderName>
        </HeaderNameAndLogo>
      </Link>
      <Navbar active={activeTab} />
      <HeaderMenuButton active={activeTab} />
    </HeaderNav>
  );
};

export default withRouter(Header);
