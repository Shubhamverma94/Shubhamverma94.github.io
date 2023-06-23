import React from "react";
import "./Techstacks.css";
import { FaFileExcel, FaJava, FaJenkins, FaReact } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaNode } from "react-icons/fa";

import {
  SiRedux,
  SiHtml5,
  SiTypescript,
  SiChakraui,
  SiExpress,
  SiPostman,
  SiHeroku,
  SiCodesandbox,
  SiNetlify,
  SiSelenium,
  SiCypress,
  SiMysql,
  SiPython,
  SiCucumber,
  SiMocha,
  SiJira
} from "react-icons/si";
import { DiCss3, DiEclipse, DiMongodb, DiVisualstudio, DiWindows } from "react-icons/di";
import { SiJavascript ,SiFirebase} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { Text } from "@chakra-ui/react";

export const Techstacks = () => {
  return (
    <div id="Skills" >
      <hr/>
      <br />
      {/* <div className="main" data-aos="fade-right" > */}
        <Text
          borderRadius={"20px"}
          as="b"
          fontSize={{ base: "18px", md: "24px", lg: "36px" }}
          style={{ textShadow: "#FC0 1px 0 10px" }}
          className="section__title_different"
        >
          ##TechStack
        </Text>
        <div className="techsection">
        <div>
            <FaJava />
            <h5>Java</h5>
          </div>  
        <div>
            <SiJavascript />
            <h5>Javascript</h5>
        </div>
        <div>
            <SiPython/>
            <h5>Python</h5>
        </div>
        
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiSelenium/>
            <h5>Selenium</h5>
          </div>
          <div>
            <SiCypress />
            <h5>Cypress</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySql</h5>
          </div>
          <div>
            <DiVisualstudio />
            <h5>Visualstudio</h5>
          </div>
          <div>
            <GiSettingsKnobs />
            <h5>DSA</h5>
          </div>
          <div>
            <DiWindows />
            <h5>Windows</h5>
          </div>
          <div>
            <SiJira />
            <h5>Jira</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>

          <div>
            <FaJenkins />
            <h5>Jenkins</h5>
          </div>

          <div>
            <DiEclipse />
            <h5>Eclipse</h5>
          </div>

          <div>
            <FaFileExcel />
            <h5>Excel</h5>
          </div>

          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>

          <div>
            <SiCucumber />
            <h5>BDD Cucumber</h5>
          </div>

          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiMocha />
            <h5>Mocha</h5>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
