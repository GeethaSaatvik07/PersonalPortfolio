// import { FiLink } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Popup from "reactjs-popup";

import {
  ProjectImageContainer,
  FullPopup,
  NameAndButton,
  ProjectImage,
  ProjectButton,
  PopupContainer,
  PopupImage,
  PopupSpanAnswer,
  PopupDetails,
  PopupHeading,
  PopupUrl,
  PopupSpan,
  PopupLoginCredentials,
  PopupDescription,
  ProjectFullDetails,
  ProjectCardTitle,
  ProjectCardDesc,
  ProjectCardViewAndCredentials,
  ProjectCardLinkLogo,
  ProjectCardLink,
  ProjectCardLogo,
  UsernameAndPassword,
} from "./styledComponents";

const ProjectCards = (props) => {
  const { projectDetails } = props;
  const {
    projectTitle,
    imageUrl,
    projectUrl,
    description,
    login,
  } = projectDetails;
  const isLogin = login === "YES";
  return (
    <ProjectImageContainer>
      <ProjectImage src={imageUrl} alt="project-image" />
      <ProjectFullDetails>
        <ProjectCardTitle>{projectTitle}</ProjectCardTitle>
        <ProjectCardDesc>{description}</ProjectCardDesc>
        <ProjectCardViewAndCredentials>
          <ProjectCardLinkLogo>
            <ProjectCardLink href={projectUrl} target="_blank">
              View Project
            </ProjectCardLink>
            <ProjectCardLogo href={projectUrl} target="_blank">
              <FiExternalLink />
            </ProjectCardLogo>
          </ProjectCardLinkLogo>
          {isLogin && (
            <UsernameAndPassword>
              <p>
                <i>Username: </i>rahul
              </p>
              <p>
                <i>Password: </i>rahul@2021
              </p>
            </UsernameAndPassword>
          )}
        </ProjectCardViewAndCredentials>
      </ProjectFullDetails>
      {/* <NameAndButton>
        <Popup
          modal
          trigger={
            <ProjectButton type="button" className="trigger-button">
              <FiLink />
            </ProjectButton>
          }
        >
          {(close) => (
            <FullPopup>
              <button
                type="button"
                onClick={() => close()}
                className="close-button"
              >
                <AiOutlineClose />
              </button>
              <PopupContainer>
                <PopupDetails>
                  <PopupHeading>
                    <PopupSpanAnswer>
                      <PopupSpan>Project Title: </PopupSpan> {projectTitle}
                    </PopupSpanAnswer>
                  </PopupHeading>
                  <PopupUrl href={projectUrl} target="_blank">
                    <PopupSpanAnswer>
                      <PopupSpan>Project URL: </PopupSpan> {projectUrl}
                    </PopupSpanAnswer>
                  </PopupUrl>
                  {isLogin && (
                    <PopupLoginCredentials>
                      Login Credentials: <br />
                      Username: rahul <br />
                      Password: rahul@2021
                    </PopupLoginCredentials>
                  )}
                  <PopupDescription>{description}</PopupDescription>
                </PopupDetails>
                <PopupImage src={imageUrl} alt="project-image" />
              </PopupContainer>
            </FullPopup>
          )}
        </Popup>
      </NameAndButton> */}
    </ProjectImageContainer>
  );
};

export default ProjectCards;
