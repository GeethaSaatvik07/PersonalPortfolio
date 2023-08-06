import {
  SkillSet,
  PercentageContainer,
  PercentageInner,
  SkillNameAndPercentage,
  SkillNameLogo,
  SkillPercent,
} from "./styledComponents";

const SkillPercentage = (props) => {
  const { percentage, skillName } = props;
  return (
    <SkillSet>
      <SkillNameAndPercentage>
        <SkillNameLogo>{skillName}</SkillNameLogo>
        <SkillPercent>{percentage}%</SkillPercent>
      </SkillNameAndPercentage>
      <PercentageContainer>
        <PercentageInner percentage={percentage}></PercentageInner>
      </PercentageContainer>
    </SkillSet>
  );
};

export default SkillPercentage;
