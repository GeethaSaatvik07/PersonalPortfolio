import styled from "styled-components";

export const ProjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 28%;
  height: 45vh;
  margin-right: 24px;
  margin-bottom: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 1px solid white;
  padding: 7px;
    transition: transform 0.3s ease;

    &:hover {
      padding-bottom: 0px;
    }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 45%;
    height: 40vh;
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 85%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-x: hidden;
  overflow-y: hidden;
  transition: transform 0.3s ease;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  ${ProjectImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const NameAndButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   width: 100%;
  width: 94.4%;
  height: 15%;
  padding: 10px;
  margin-right: 3px;
  z-index: 1;
  transition: transform 0.3s ease;
  //   background-color: black;
  background-color: rgba(24, 210, 110, 0.6);

  ${ProjectImageContainer}:hover & {
    background-color: rgba(24, 210, 110);
    transform: scale(1.05);
    // height: 58%;
    // padding-bottom: 0px;
  }
`;

export const ProjectTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin-left: 10px;
`;

export const ProjectButton = styled.button`
  border: none;
  outline: none;
  background: none;
  //   color: white;
  color: black;
  font-size: 28px;
  line-height: 28px;
  transition: color 0.3s;
  margin-right: 10px;

  &:hover {
    // color: #18d26e;
    color: white;
  }
`;

export const FullPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  //   padding: 30px;
  border-radius: 5px;
  background-image: url("https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/wavy-folds_angvqw.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  margin-bottom: 42px;
  padding: 15px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 58%;
    width: 80%;
    padding: 15px;
  }
`;

export const PopupImage = styled.img`
  width: 45%;
  border-radius: 15px;

  @media (max-width: 768px){
      width: 100%
      order: 1;
  }
`;

export const PopupDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const PopupSpanAnswer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const PopupHeading = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: white;
  //   margin-bottom: 12px;
`;

export const PopupUrl = styled.a`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: #18d26e;
  margin-top: 10px;
  text-decoration: none;
  //   margin-bottom: 12px;
`;

export const PopupSpan = styled.p`
  font-weight: bold;
  color: white;
  margin-right: 10px;
  //   margin-bottom: 12px;
`;

export const PopupLoginCredentials = styled.p`
  font-family: "Open-sans", sans-serif;
  color: white;
  font-size: 15px;
  line-height: 15px;
  margin-top: 10px;
`;

export const PopupDescription = styled.p`
  font-family: "Open-sans", sans-serif;
  color: white;
  font-size: 18px;
  line-height: 18px;
  margin-top: 25px;
`;
