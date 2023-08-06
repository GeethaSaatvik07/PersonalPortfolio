import styled from "styled-components";

export const HeaderNav = styled.nav`
  background-color: black;
  height: 80px;
  opacity: 89%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;
`;

export const MenuPopupList = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  border: 1px solid #444444;
  margin: 10px;
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HeaderNameAndLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  line-height: 36px;
  color: white;

  @media (max-width: 576px) {
    display: none;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 26px;
    line-height: 26px;
  }
`;

export const HeaderLogo = styled.img`
  width: 80px;
  line-height: 36px;
  margin-left: 100px;

  @media (max-width: 576px) {
    margin-left: 15px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 26px;
    line-height: 26px;
    margin-left: 75px;
  }
`;
