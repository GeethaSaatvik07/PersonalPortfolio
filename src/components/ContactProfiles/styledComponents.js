import styled from "styled-components";

export const ContactMeProfiles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 24px;
`;

export const CardDetailsAlign = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  width: 44.85%;
  margin-right: 24px;
  margin-bottom: 24px;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 41.03%;
    margin-right: 12px;
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const CardLogoContainer = styled.div`
  background-color: #444444;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: #18d26e;
`;

export const CardHeadingPara = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeadings = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: white;
  opacity: 60%;
  margin-bottom: 8px;
`;

export const CardLines = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: white;
`;

export const CardAnchors = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: #18d26e;
  }
`;
