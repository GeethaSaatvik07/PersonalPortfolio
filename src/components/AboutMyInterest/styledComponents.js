import styled from "styled-components";

export const InterestsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const InterestTab = styled.div`
  width: 22.9%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 1px;
  margin-right: 24px;
  margin-bottom: 24px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 46.39%;
  }
`;

export const InterestName = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: white;
`;
