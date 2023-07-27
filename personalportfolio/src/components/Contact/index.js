// import { BiMap, BiShareAlt, BiEnvelope, BiPhoneCall } from "react-icons/bi";

import {
  ContactPage,
  //   ContactMeProfiles,
  //   CardLogoContainer,
  //   CardDetailsAlign,
  //   CardHeadingPara,
  //   CardHeadings,
  //   CardLines,
} from "./styledComponents";

import Header from "../Header";
import ContactProfiles from "../ContactProfiles";
import ContactForm from "../ContactForm";

import "./index.css";

const Contact = () => (
  <ContactPage>
    <Header activeTab={"Contact"} />
    <div className="flow-behind">
      <div className="pages-background">
        <div className="page-headings">
          <h2 className="page-name">CONTACT</h2>
          <hr className="page-hr-line" />
        </div>
        <p className="page-intro">CONTACT ME</p>
        <ContactProfiles />
        <ContactForm />
      </div>
    </div>
  </ContactPage>
);

export default Contact;
