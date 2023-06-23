import { Text, Button } from "@chakra-ui/react";
import React from "react";
import ProfilePic from "../../assests/self.png";
import Shubham_Verma_Resume from "../../assests/Shubham_Verma_Resume.pdf";
import Pen from "./pen.gif";
import { FaFileDownload } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

import "./Intro.css";
import { Type } from "../About/Type";
import { Dot } from "./DotWritting";

const Intro = () => {
  const onButtonClick = () => {
    window.open(Shubham_Verma_Resume);
  };

  return (
    <div id="About">
      <br />
      <br />
      <Text
        borderRadius={"20px"}
        as="b"
        fontSize={{ base: "18px", md: "24px", lg: "36px" }}
        style={{ textShadow: "#FC0 1px 0 10px" }}
        className="section__title_different"
      >
        ##About
      </Text>
      <div className="Intromain">
        <div>
          <div className="ImgPP">
            <img src={ProfilePic} alt="profile_pic" />
          </div>
        </div>
        <div className="aboutIntro">
          <Text
            borderRadius={"20px"}
            as="b"
            fontSize={{ base: "18px", md: "24px", lg: "36px" }}
            style={{ textShadow: "#FC0 1px 0 10px" }}
          >
            About Me!
          </Text>
          <Type />

          <div style={{ width: "50%", margin: "auto", textAlign: "justify" }}>
            <b>
              I am versatile and responsible entry-level SDET, possess
              proficiency in Java, JavaScript, Python, as well as
              extensive experience in Selenium, mobile testing, and Cypress.
              With a solid foundation gained through 15+ weeks of practical
              training at Masai School, I have honed my problem-solving skills
              and cultivated a collaborative mindset. My unwavering dedication
              to delivering exceptional results fuels my passion, and I am fully
              prepared to make a meaningful contribution while thriving in a
              dynamic, fast-paced environment, actively propelling company
              growth.{" "}
              <span style={{ display: "inline-block" }}>
                <Dot />
                <img id="pen" src={Pen} alt="pen" />
              </span>
            </b>
          </div>
          <Button
            backgroundColor="#a891b7"
            gap={2}
            _hover={{ bg: "#a891b7", color: "black", transform: "scale(1.1)" }}
            color="white"
            variant="solid"
            onClick={onButtonClick}
            size={["sm", "md"]}
            download="Shubham_Verma_Resume"
          >
            <a
              href={Shubham_Verma_Resume}
              target="_blank"
              download="Shubham_Verma_Resume"
            >
              RESUME
            </a>
            <FaFileDownload />
          </Button>
          <Button
            backgroundColor="#a891b7"
            gap={2}
            _hover={{ bg: "", color: "black", transform: "scale(1.1)" }}
            color="white"
            variant="solid"
            size={["sm", "md"]}
          >
            <a href="#Contact">Contact</a>
            <MdContacts />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
