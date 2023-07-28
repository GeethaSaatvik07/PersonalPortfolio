import styled from "styled-components";

export const SkillSet = styled.div`
  display: flex;
  flex-direction: column;
  width: 48.1%;
  margin-right: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const PercentageContainer = styled.div`
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
  margin-bottom: 22px;
  font-size: 12px;
  line-height: 18px;
`;

export const SkillNameAndPercentage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const SkillNameLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  font-size: 12px;
  line-height: 18px;
`;

export const SkillPercent = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
`;

export const PercentageInner = styled.div`
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: #18d26e;
`;
