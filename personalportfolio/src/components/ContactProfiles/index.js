import { BiMap, BiShareAlt, BiEnvelope, BiPhoneCall } from "react-icons/bi";

import {
  ContactMeProfiles,
  CardLogoContainer,
  CardDetailsAlign,
  CardHeadingPara,
  CardHeadings,
  CardLines,
  CardAnchors,
} from "./styledComponents";

import ContactSocialProfiles from "../ContactSocialProfiles";

const ContactProfiles = () => (
  <ContactMeProfiles>
    <CardDetailsAlign>
      <CardLogoContainer>
        <BiMap />
      </CardLogoContainer>
      <CardHeadingPara>
        <CardHeadings>My Address</CardHeadings>
        <CardLines>
          <CardAnchors
            href="https://goo.gl/maps/5gsDXrQs1AhcZPKm6"
            target="_blank"
            rel="noreferrer"
          >
            Hyderabad, India, 500050
          </CardAnchors>
        </CardLines>
      </CardHeadingPara>
    </CardDetailsAlign>
    <CardDetailsAlign>
      <CardLogoContainer>
        <BiShareAlt />
      </CardLogoContainer>
      <CardHeadingPara>
        <CardHeadings>Social Profiles</CardHeadings>
        <CardLines>
          <ContactSocialProfiles />
        </CardLines>
      </CardHeadingPara>
    </CardDetailsAlign>
    <CardDetailsAlign>
      <CardLogoContainer>
        <BiEnvelope />
      </CardLogoContainer>
      <CardHeadingPara>
        <CardHeadings>Email Me</CardHeadings>
        <CardLines>
          <CardAnchors href="mailto:saatvikgeetha@gmail.com">
            saatvikgeetha@gmail.com
          </CardAnchors>
        </CardLines>
      </CardHeadingPara>
    </CardDetailsAlign>
    <CardDetailsAlign>
      <CardLogoContainer>
        <BiPhoneCall />
      </CardLogoContainer>
      <CardHeadingPara>
        <CardHeadings>Call Me</CardHeadings>
        <CardLines>
          <CardAnchors href="tel:+918179565945">+91 8179565945</CardAnchors>
        </CardLines>
      </CardHeadingPara>
    </CardDetailsAlign>
  </ContactMeProfiles>
);

export default ContactProfiles;
