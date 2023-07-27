import { Component } from "react";
import { BiChevronRight } from "react-icons/bi";
import {
  AboutPage,
  //   AboutMe,
  DetailsAndImage,
  Details,
  MyImage,
  RoleName,
  RoleWork,
  ExtraDetails,
  ExtraDetailsList,
  ExtraDetailsListSpan,
  RoleBio,
  AboutSkills,
  SkillList,
  AboutInterests,
  //   InterestsList,
} from "./styledComponents";

import Header from "../Header";
import SkillsSet from "../SkillsSet";
import MyInterest from "../MyInterest";

import "./index.css";

const myRoleLines = [
  {
    id: 0,
    roleLine:
      "Digital Dreamweaver: Uniting the realms of design and development, painting the web with unparalleled innovation and allure.",
  },
  {
    id: 1,
    roleLine:
      "Versatile code conjurer and web architect, seamlessly weaving spells of front-end, back-end, and database sorcery to craft mesmerizing user-centric experiences.",
  },
  {
    id: 2,
    roleLine:
      "Digital sorcerer with boundless creativity, conjuring immersive realms through alchemy of front-end, back-end, and database wizardry for unparalleled web experiences.",
  },
  {
    id: 3,
    roleLine:
      "Mystical web weaver, harmonizing front-end enchantments, back-end sorcery, and database alchemy, to conjure extraordinary and immersive online wonders for users.",
  },
  {
    id: 4,
    roleLine:
      "Whispering to the digital spirits, I wield front-end sorcery, back-end enchantments, and database alchemy to craft extraordinary web experiences that mesmerize users.",
  },
  {
    id: 5,
    roleLine:
      "In the digital symphony, I conduct front-end marvels, back-end enchantments, and database alchemy, conjuring immersive web experiences that enchant the soul.",
  },
  {
    id: 6,
    roleLine:
      "Architecting dynamic cyber realms: Uniting front-end finesse with back-end brilliance to breathe life into immersive web landscapes.",
  },
  {
    id: 7,
    roleLine:
      "Web virtuoso navigating both realms: Designing enchanting front-end symphonies while taming complex back-end beasts.",
  },
  {
    id: 8,
    roleLine:
      "Code maestro orchestrating symmetrical full stack symphonies: Crafting harmonious web experiences from every angle.",
  },
  {
    id: 9,
    roleLine:
      "Crafting digital dreamscapes: Harmonizing front-end aesthetics with back-end functionality for captivating web odysseys.",
  },
  {
    id: 10,
    roleLine:
      "Web Scribe of Wonders: Crafting full stack epics where artistry dances with technology to forge unforgettable digital sagas.",
  },
  {
    id: 11,
    roleLine:
      "Architect of Virtual Realms: Uniting front-end poetry and back-end engineering to shape awe-inspiring web galaxies.",
  },
];

const biosList = [
  {
    id: 0,
    bio: `Meet the architect of digital wonders, 
        a Full Stack Web Developer – that's me! With 
        HTML, CSS, and JavaScript as my chisel and 
        hammer, I sculpt captivating user experiences 
        that transcend the ordinary. The magic of 
        ReactJS and ExpressJS breathes life into my 
        creations, captivating users with seamless 
        interactions. As a back-end sorcerer wielding 
        Node.js and Python, I ensure every function is 
        flawlessly executed. Unafraid of uncharted 
        territories, I explore the ever-evolving web 
        cosmos, seeking cutting-edge solutions. Join 
        me on a journey through my portfolio, where 
        innovation and creativity dance in harmony, 
        and the boundaries of possibility are 
        redefined with every stroke of code.
        `,
  },
  {
    id: 1,
    bio: `Enter the harmonious realm of Full Stack 
        Web Development, where I orchestrate a symphony 
        of frontend and backend skills, blending them 
        like the perfect musical score. As a web virtuoso, 
        I craft captivating user interfaces that dance to 
        the rhythm of HTML, CSS, JS, and ReactJS, 
        enchanting users like a mesmerizing melody. In the 
        backend, I compose powerful functionality with the 
        grandeur of Node.js, Express.js, and databases, 
        creating a backend concerto that resonates with 
        seamless precision. Embracing the passion of 
        music, I explore new notes of coding, constantly 
        refining my skills. Let's harmonize your visions 
        and my talents, creating an unforgettable web 
        composition that strikes a chord in the hearts 
        of all who encounter it.`,
  },
  {
    id: 2,
    bio: `Step into the arena of Full Stack Web 
        Development, where I play the game of frontend 
        and backend with the finesse of a seasoned 
        athlete. With the agility of HTML, CSS, JS, and ReactJS, I sprint across the field, crafting 
        winning user interfaces that leave spectators in 
        awe. In the backend arena, I tackle challenges 
        with the strength of Node.js, Express.js, and 
        databases, like a defensive wall that can't be 
        breached. Embracing the spirit of sportsmanship, 
        I strive for continuous improvement, constantly 
        honing my skills. Let's score big together, where 
        your visions and my talents combine to create a 
        sporting web experience that earns a standing 
        ovation from all who witness it. Game on!`,
  },
  {
    id: 3,
    bio: `Embark on a captivating expedition into 
        the world of Full Stack Web Development, where 
        I bridge the realms of frontend and backend 
        like an intrepid traveler exploring diverse 
        landscapes. With the artistry of HTML, CSS, 
        JS, and ReactJS, I craft visually stunning user 
        interfaces that mirror the breathtaking vistas 
        of our adventures. On the backend horizon, I 
        navigate with the expertise of Node.js, 
        Express.js, and databases, mapping out a 
        seamless journey for users. Embracing the 
        spirit of wanderlust, I constantly seek new 
        coding destinations, unveiling hidden gems of 
        innovation. Let's set forth together, where 
        your visions soar as unforgettable digital 
        journeys, and my skills guide travelers to 
        exhilarating web experiences that leave 
        footprints on the heart. Bon voyage!`,
  },
  {
    id: 4,
    bio: `Step into the silver screen of Full Stack 
        Web Development, where I direct the captivating 
        drama of frontend and backend with the finesse 
        of a seasoned filmmaker. With the artistry of 
        HTML, CSS, JS, and ReactJS, I create visually 
        engaging user interfaces that rival the magic 
        of the big screen. In the backend studio, I 
        script powerful functionality with the brilliance 
        of Node.js, Express.js, and databases, like a 
        cinematic masterpiece unfolding. Embracing the 
        enchantment of movies, I constantly explore new 
        plotlines of coding, seeking innovative twists. 
        Let's create an unforgettable movie reel, where 
        your visions take center stage as gripping web 
        experiences, and my skills craft a blockbuster 
        showcase for your digital dreams. The show is 
        about to begin!`,
  },
];

class About extends Component {
  state = { roleLine: "", bio: "" };

  componentDidMount() {
    this.getRoleLine();
  }

  getRoleLine = () => {
    const roleNum = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
    const bioNum = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    this.setState({
      roleLine: myRoleLines[roleNum].roleLine,
      bio: biosList[bioNum].bio,
    });
  };

  render() {
    const { roleLine, bio } = this.state;
    return (
      <AboutPage>
        <Header activeTab={"About"} />
        <div className="flow-behind">
          <div className="pages-background">
            <div className="page-headings">
              <h2 className="page-name">ABOUT</h2>
              <hr className="page-hr-line" />
            </div>
            <p className="page-intro">LEARN MORE ABOUT ME</p>
            <DetailsAndImage>
              <Details>
                <RoleName>Full Stack Web Developer</RoleName>
                <RoleWork>{roleLine}</RoleWork>
                <ExtraDetails>
                  <ExtraDetailsList>
                    <BiChevronRight className="chevron-right" />
                    <ExtraDetailsListSpan>Birthday: </ExtraDetailsListSpan> 2
                    June 2001
                  </ExtraDetailsList>
                  <ExtraDetailsList>
                    <BiChevronRight className="chevron-right" />
                    <ExtraDetailsListSpan>Website: </ExtraDetailsListSpan>{" "}
                    www.example.com
                  </ExtraDetailsList>
                  <ExtraDetailsList>
                    <BiChevronRight className="chevron-right" />
                    <ExtraDetailsListSpan>Degree: </ExtraDetailsListSpan>{" "}
                    Bachelor's
                  </ExtraDetailsList>
                  <ExtraDetailsList>
                    <BiChevronRight className="chevron-right" />
                    <ExtraDetailsListSpan>
                      Contact No:{" "}
                    </ExtraDetailsListSpan>{" "}
                    +91 8179565945
                  </ExtraDetailsList>
                  <ExtraDetailsList>
                    <BiChevronRight className="chevron-right" />
                    <ExtraDetailsListSpan>Email ID: </ExtraDetailsListSpan>{" "}
                    saatvikgeetha@gmail.com
                  </ExtraDetailsList>
                  <ExtraDetailsList>
                    <BiChevronRight className="chevron-right" />
                    <ExtraDetailsListSpan>City: </ExtraDetailsListSpan>{" "}
                    Hyderabad, India
                  </ExtraDetailsList>
                </ExtraDetails>
                <RoleBio>{bio}</RoleBio>
              </Details>
              <MyImage
                src="https://res.cloudinary.com/dbj5bk2gm/image/upload/v1690228817/Portfolio-Photo_tytixp.webp"
                alt="profile-photo"
              />
            </DetailsAndImage>
            <AboutSkills>
              <div className="page-headings">
                <h2 className="page-name">SKILLS</h2>
                <hr className="page-hr-line" />
              </div>
              <SkillList>
                <SkillsSet />
              </SkillList>
            </AboutSkills>
            <AboutInterests>
              <div className="page-headings">
                <h2 className="page-name">INTERESTS</h2>
                <hr className="page-hr-line" />
              </div>
              <MyInterest />
            </AboutInterests>
          </div>
        </div>
      </AboutPage>
    );
  }
}

export default About;
