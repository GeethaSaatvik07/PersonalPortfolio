import styled from "styled-components";

export const HomeNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0px;
  margin-right: 100px;
  padding-right: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeNavPage = styled.li`
  list-style-type: none;
  margin-right: 30px;
  padding-bottom: 5px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  opacity: 60%;
  transition: opacity 1s, border-bottom 0.5s;

  &:hover {
    opacity: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid #18d26e;
  }
`;

export const ActiveHomeNavPage = styled.li`
  list-style-type: none;
  margin-right: 30px;
  color: white;
  padding-bottom: 5px;
  font-family: "Poppins", sans-serif;
  border-bottom: 2px solid #18d26e;
  font-size: 16px;
  line-height: 24px;
  opacity: 100%;
`;
