import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

import { SocialProfilesList } from "./styledComponents";

import "./index.css";

const ContactSocialProfiles = () => (
  <SocialProfilesList>
    <a
      href="https://www.linkedin.com/in/geethasaatvikadepu/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin className="contact-social-logo" />
    </a>
    <a
      href="https://www.instagram.com/_geetha.saatvik_/"
      target="_blank"
      rel="noreferrer"
    >
      <BsInstagram className="contact-social-logo" />
    </a>
    <a
      href="https://twitter.com/Geethasaatvik"
      target="_blank"
      rel="noreferrer"
    >
      <BsTwitter className="contact-social-logo" />
    </a>
    <a
      href="https://github.com/GeethaSaatvik07"
      target="_blank"
      rel="noreferrer"
    >
      <BsGithub className="contact-social-logo" />
    </a>
    <a
      href="https://www.hackerrank.com/18BCS3850?hr_r=1"
      target="_blank"
      rel="noreferrer"
    >
      <SiHackerrank className="contact-social-logo" />
    </a>
  </SocialProfilesList>
);

export default ContactSocialProfiles;
