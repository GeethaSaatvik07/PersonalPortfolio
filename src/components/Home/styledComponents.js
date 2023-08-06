import styled from "styled-components";

export const HomePageWithMenu = styled.div`
  background-image: url("https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/wavy-folds_angvqw.webp");
  background-size: cover;
  height: 100vh;
`;

export const HomePage = styled.div`
  //   background-image: url("https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/wavy-folds_angvqw.webp");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HomeContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 12px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5px;
  }
`;

export const HomeName = styled.h1`
  font-size: 48px;
  line-height: 48px;
  font-family: "Poppins", sans-serif;
  color: white;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const HomeLine = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  line-height: 28.8px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const RoleSpan = styled.span`
  border-bottom: 2px solid #18d26e;
  padding-bottom: 5px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
`;

// export const HomeNav = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   width: 80%;
//   margin-left: 0px;
//   margin-bottom: 40px;
// `;

export const HomeSocialNetworks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;
