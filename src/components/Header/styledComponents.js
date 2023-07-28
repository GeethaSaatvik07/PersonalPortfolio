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

// export const MenuPopup = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100vw;
//   //   padding: 30px;
//   border-radius: 5px;
//   //   background-image: url("https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/wavy-folds_angvqw.webp");
//   //   background-repeat: no-repeat;
//   //   background-size: cover;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

export const MenuPopupList = styled.div`
  //     display: flex;
  //   flex-direction: row;
  //   justify-content: space-around;
  //   align-items: center;
  height: 100%;
  width: 100%;
  //   background-color: rgba(0, 0, 0, 0.8);
  //   margin-bottom: 42px;
  padding: 10px;
  border: 1px solid #444444;
  margin: 10px;
`;

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: flex-start;
  //   align-items: center;
  padding: 15px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HeaderName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  line-height: 36px;
  color: white;
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

// export const HomeNav = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   //   width: 50%;
//   margin-left: 0px;
//   margin-bottom: 40px;
// `;
