import styled from "styled-components";

export const AboutPage = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: url("https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/wavy-folds_angvqw.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

// export const AboutMe = styled.div`
// position: relative;
// background-color: rgba(0,0,0,0.5);
// border-radius: 5px;
// // z-index: 0
// color: yellow;
// height: 100%;
// overflow-y: auto;
// padding: 30px;
// margin: 100px;
// // padding-top: 100px;
// // margin-top: 100px;
// // margin-right: 100px;
// // margin-left: 100px;

// &::-webkit-scrollbar{
//     display: none;
// }
// scrollbar-width: none;
// `

export const DetailsAndImage = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 65%;
  margin-right: 39px;
`;

export const MyImage = styled.img`
  width: 30%;
  border-radius: 5px;
`;

export const RoleName = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  line-height: 31.2px;
  color: #18d26e;
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 8px;
`;

export const RoleWork = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 16px;
`;

export const ExtraDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ExtraDetailsList = styled.li`
  list-style-type: none;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: white;
  width: 50%;
`;

export const ExtraDetailsListSpan = styled.span`
  font-weight: 600;
  margin-right: 10px;
  margin-left: 5px;
`;

export const RoleBio = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

export const AboutSkills = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
`;
export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const AboutInterests = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
