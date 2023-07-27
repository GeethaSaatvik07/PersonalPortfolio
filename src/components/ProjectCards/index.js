import { FiLink } from "react-icons/fi";
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
      <NameAndButton>
        {/* <ProjectTitle>{projectTitle}</ProjectTitle> */}
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
      </NameAndButton>
    </ProjectImageContainer>
  );
};

export default ProjectCards;

// {
//     id: "a19d93d6-bdac-479e-b554-974ef9e6e66c",
//     categoryId: "PROJECT",
//     projectTitle: "Tourism Website",
//     description:
//       "A tourism website enables the user to browse through the images of popular destinations.",
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
//     projectUrl: "https://tourismapp.ccbp.tech/",
//   },
