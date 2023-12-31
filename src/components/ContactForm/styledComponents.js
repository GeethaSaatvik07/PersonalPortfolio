import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
`;

export const NameEmail = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const NameInput = styled.input`
  width: 46.54%;
  border: none;
  outline: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 21px;
  background-color: rgba(255, 255, 255, 0.08);
  margin-right: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  color: white;
  margin-bottom: 16px;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 43.07%;
    margin-right: 12px;
  }

  @media (max-width: 576px) and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const EmailInput = styled.input`
  width: 46.54%;
  border: none;
  outline: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 21px;
  background-color: rgba(255, 255, 255, 0.08);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  color: white;
  margin-bottom: 16px;

  @media (min-width: 576px) and (max-width: 768px) {
    width: 43.07%;
  }

  @media (max-width: 576px) and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const Message = styled.textarea`
  font-family: "Open Sans", sans-serif;
  outline: none;
  border: none;
  height: 129px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 16px;
  background-color: rgba(255, 255, 255, 0.08);
  color: white;
  resize: none;
`;

export const SendButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: white;
  background-color: #18d26e;
  border-radius: 4px;
  height: 44px;
  width: 200px;
  transition: background-color 0.5s;

  &:hover {
    background-color: #15bb62;
  }
`;
