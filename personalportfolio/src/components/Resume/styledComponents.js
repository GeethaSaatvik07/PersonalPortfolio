import styled from "styled-components";

export const ResumePage = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url("https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/wavy-folds_angvqw.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const ChronoList = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  margin-top: 15px;
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ResumeHeadings = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  line-height: 31.2px;
  color: white;
  //   background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 18px;
`;

export const SummaryAndExperience = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EducationChrono = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChronoContainer = styled.div`
  width: 300px;
  height: 500px;
`;
