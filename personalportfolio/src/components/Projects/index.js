import { ProjectsPage, ProjectsContainer } from "./styledComponents";

import Header from "../Header";
import ProjectCards from "../ProjectCards";

import "./index.css";

const projectsList = [
  {
    id: "a19d93d6-bdac-479e-b554-974ef9e6e66c",
    categoryId: "PROJECT",
    projectTitle: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    projectUrl: "https://tourismapp.ccbp.tech/",
  },
  {
    id: "ae2ede68-af77-427c-817c-0ce4beeb69c7",
    categoryId: "PROJECT",
    projectTitle: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    projectUrl: "https://fm.ccbp.tech/",
  },
  {
    id: "d6c4b3a5-7b1d-4906-aca8-823f44129004",
    categoryId: "PROJECT",
    projectTitle: "Todos Application",
    description:
      "This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png",
    projectUrl: "https://todossapp.ccbp.tech/",
  },
  {
    id: "0a35abbe-22ca-40a1-81da-613f656b7702",
    categoryId: "PROJECT",
    projectTitle: "Wikipedia Search Application",
    description:
      "Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png",
    projectUrl: "https://wikiseaarch.ccbp.tech/",
  },
  {
    id: "7bc3f006-f0f1-4574-924b-17c480556727",
    categoryId: "PROJECT",
    projectTitle: "Rock Paper Scissors",
    description:
      "The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png",
    projectUrl: "https://movemessengers.ccbp.tech/",
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "REACT",
    projectTitle: "Nxt Trendz",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl:
      //   "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png"
      "https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",
    projectUrl: "https://nxtz.ccbp.tech/",
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7dellf5f2ac3",
    categoryId: "REACT",
    projectTitle: "Jobby Portal",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/home-lg-bg.png",
    // "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    projectUrl: "https://jobbyportal.ccbp.tech/",
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7hellf5f2ac3",
    categoryId: "REACT",
    projectTitle: "Nxt Watch",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png",
    // "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    projectUrl: "https://jobbyportal.ccbp.tech/",
  },
];

const Projects = () => (
  <ProjectsPage>
    <Header activeTab={"Projects"} />
    <div className="flow-behind">
      <div className="pages-background">
        <div className="page-headings">
          <h2 className="page-name">PROJECTS</h2>
          <hr className="page-hr-line" />
        </div>
        <p className="page-intro">MY PROJECTS</p>
        <ProjectsContainer>
          {projectsList.map((eachProject) => (
            <ProjectCards key={eachProject.id} projectDetails={eachProject} />
          ))}
        </ProjectsContainer>
      </div>
    </div>
  </ProjectsPage>
);

export default Projects;
