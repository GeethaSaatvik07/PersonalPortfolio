import { PiBooks } from "react-icons/pi";
import { TbChefHat } from "react-icons/tb";
import { MdTravelExplore, MdOutlineSportsBasketball } from "react-icons/md";
import { GiTechnoHeart, GiHiking, GiFlowers } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";

import { InterestsList, InterestTab, InterestName } from "./styledComponents";

import "./index.css";

const AboutMyInterest = () => (
  <InterestsList>
    <InterestTab>
      <PiBooks className="interest-icon" />
      <InterestName>Reading Books</InterestName>
    </InterestTab>
    <InterestTab>
      <TbChefHat className="interest-icon" />
      <InterestName>Cooking</InterestName>
    </InterestTab>
    <InterestTab>
      <MdTravelExplore className="interest-icon" />
      <InterestName>Travelling</InterestName>
    </InterestTab>
    <InterestTab>
      <MdOutlineSportsBasketball className="interest-icon" />
      <InterestName>Basketball</InterestName>
    </InterestTab>
    <InterestTab>
      <GiTechnoHeart className="interest-icon" />
      <InterestName>Technology and Gadgets</InterestName>
    </InterestTab>
    <InterestTab>
      <GiHiking className="interest-icon" />
      <InterestName>Hiking</InterestName>
    </InterestTab>
    <InterestTab>
      <GiFlowers className="interest-icon" />
      <InterestName>Gardening</InterestName>
    </InterestTab>
    <InterestTab>
      <IoGameControllerOutline className="interest-icon" />
      <InterestName>Gaming</InterestName>
    </InterestTab>
  </InterestsList>
);

export default AboutMyInterest;
