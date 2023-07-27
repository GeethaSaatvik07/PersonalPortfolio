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

export const HeaderName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  line-height: 36px;
  color: white;
  margin-left: 100px;
  padding-left: 12px;
`;

// export const HomeNav = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   //   width: 50%;
//   margin-left: 0px;
//   margin-bottom: 40px;
// `;
