import { Chrono } from "react-chrono";
import { MdWork } from "react-icons/md";

import {
  ResumePage,
  ChronoList,
  SummaryAndExperience,
  ResumeHeadings,
  EducationChrono,
} from "./styledComponents";

import Header from "../Header";
import {
  ResumeSummaryCard,
  ResumeEducationCards,
  ResumeExperienceCards,
} from "../ResumeChronoCards";

import "./index.css";

const summaryList = [
  {
    id: "0",
    categoryId: "SUMMARY",
    cardTitle: "GEETHA SAATVIK ADEPU",
    description:
      "Passionate Full Stack Web Developer, blending innovation with precision. With 1 year of internship experience, I craft user-centric digital solutions from concept to polished execution, igniting meaningful online experiences, and leaving a lasting impact.",
    summaryList: [
      {
        id: "0",
        contact: "Hyderabad, India, 507115",
      },
      {
        id: "1",
        contact: "saatvikgeetha@gmail.com",
      },
      {
        id: "2",
        contact: "+91 8179565945",
      },
    ],
  },
];

const experienceList = [
  {
    id: "4",
    categoryId: "JOB",
    title: "2021-2022",
    cardTitle: "FULL STACK WEB DEVELOPER INTERNSHIP",
    cardCollege: "HighRadius Technologies, Bhubaneshwar (Remote), India",
    experience: [
      {
        id: "1",
        exp:
          "Developed a User-Interface of the website using Figma, HTML, CSS, Bootstrap, JavaScript, and ReactJS",
      },
      {
        id: "2",
        exp:
          "Developed a chatbot to help the users using DialogFlow, Jira, and Company Tools.",
      },
    ],
  },
];

const timeLineList = [
  {
    id: "1",
    categoryId: "EDUCATION",
    title: "2018-2022",
    cardTitle: "BACHELOR OF TECHNOLOGY",
    cardCollege: "Chandigarh University, Punjab, India",
    description:
      "Embarked on an exhilarating educational journey in the realm of Computer Science and Engineering, culminating in a dynamic collaboration with tech giant IBM. Now armed with knowledge and experience, ready to conquer new horizons.",
  },
  {
    id: "2",
    categoryId: "EDUCATION",
    title: "2016-2018",
    cardTitle: "INTERMEDIATE (MPC)",
    cardCollege: "Narayana Junior College, Hyderabad, India",
    description:
      "Avid science enthusiast with a strong foundation in maths, physics, and chemistry. Seeking challenging opportunities in engineering, research, or education.",
  },
  {
    id: "3",
    categoryId: "EDUCATION",
    title: "2015-2016",
    cardTitle: "CLASS 10th",
    cardCollege: "Triveni Talent School, Kothagudem, India",
    description:
      "Unleashing the wonders of science, I triumphantly conquered Class 10,  unraveling the mysteries of the branches of science.",
  },
];

const Resume = () => (
  <ResumePage>
    <Header activeTab={"Resume"} />
    <div className="flow-behind">
      <div className="pages-background">
        <div className="page-headings">
          <h2 className="page-name">RESUME</h2>
          <hr className="page-hr-line" />
        </div>
        <p className="page-intro">CHECK MY RESUME</p>
        <ChronoList>
          <SummaryAndExperience>
            <ResumeHeadings>Summary</ResumeHeadings>
            <Chrono
              // items={timeLineList}
              mode="VERTICAL"
              hideControls={{ hideControls: true }}
              clickable={false}
              lineWidth={0.1}
              theme={{
                primary: "#18d26e",
                secondary: "white",
                cardBgColor: "rgba(0,0,0,0)",
              }}
            >
              {summaryList.map((eachItem) => (
                <ResumeSummaryCard
                  key={eachItem.id}
                  summaryDetails={eachItem}
                />
              ))}
            </Chrono>
            <ResumeHeadings>Professional Experience</ResumeHeadings>
            <Chrono
              // items={timeLineList}
              icons={MdWork}
              mode="VERTICAL"
              hideControls={{ hideControls: true }}
              clickable={false}
              lineWidth={0.1}
              theme={{
                primary: "#18d26e",
                secondary: "white",
                cardBgColor: "rgba(0,0,0,0)",
              }}
            >
              {experienceList.map((eachItem) => (
                <ResumeExperienceCards
                  key={eachItem.id}
                  jobDetails={eachItem}
                />
              ))}
              {/* <div className="chrono-icons">
    <img src="image1.svg" alt="image1" />
  </div> */}
            </Chrono>
          </SummaryAndExperience>
          <EducationChrono>
            <ResumeHeadings>Education</ResumeHeadings>
            <Chrono
              // items={timeLineList}
              mode="VERTICAL"
              hideControls={{ hideControls: true }}
              clickable={false}
              lineWidth={0.1}
              theme={{
                primary: "#18d26e",
                secondary: "white",
                cardBgColor: "rgba(0,0,0,0)",
              }}
            >
              {timeLineList.map((eachItem) => (
                <ResumeEducationCards
                  key={eachItem.id}
                  educationDetails={eachItem}
                />
              ))}
            </Chrono>
          </EducationChrono>
        </ChronoList>
      </div>
    </div>
  </ResumePage>
);

export default Resume;
