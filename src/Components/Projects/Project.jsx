import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiBootstrap,
  SiChakraui,
  SiReact,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <Text
          borderRadius={"20px"}
          as="b"
          fontSize={{ base: "18px", md: "24px", lg: "36px" }}
          style={{ textShadow: "#FC0 1px 0 10px" }}
          className="section__title_different"
        >
          ##Projects
        </Text>
        {/* <p className="section__title_different">recently worked on:-</p> */}
        <div className="allProjects">
          {/* 1st */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ytimg.com/vi/a5RiQXOnqAM/maxresdefault.jpg"
                    alt="sugar-cosmetics-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“Sugar Cosmetics”.</h2>
                <p>
                  SUGAR Cosmetics is a cruelty-free makeup brand that is high on
                  style and higher on performance. The brand is inspired by and
                  targeted towards bold, independent women who refuse to be
                  stereotyped into roles.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiReact />
                  <SiRedux />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href=" https://masai-cosmetics.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Deployed Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/vivek13420/alluring-bottle-5827"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/103638279/208412092-7891ea39-e9b5-4bdb-b470-a037000281ac.png"
                    alt="cricbuzz"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“Cricbuzz”.</h2>
                <p>
                  Cricbuzz is an Indian cricket news website owned by Times
                  Internet. It features, news, articles and live coverage of
                  cricket matches including videos, text commentary, player
                  stats and team rankings. Their website also offers a mobile
                  app. Cricbuzz is one of the most popular mobile apps for
                  cricket news and scores in India.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://cricbuzz-masai.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Deployed Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/spvhantale/Cricbuzz_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3nd */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://camo.githubusercontent.com/e397c383a27890015fd20e50610d2963879a05e89fd5b2962c793352f74b22cb/68747470733a2f2f692e696d2e67652f323032322f30392f32302f31734a324b532e61312e706e67"
                    alt="kimaye"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“Kimaye”.</h2>
                <p>
                  Hassle free online fruit ordering platform in Mumbai, Kimaye
                  is a promise of consistently delivering the safest and
                  superior quality fruits.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href=" https://kimayeio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Deployed Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/prayagp8/TEAM-ALPHA-KIMAYE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* /* 4nd */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src=" https://user-images.githubusercontent.com/103638279/208399229-17bcbb8a-348a-40a1-890d-80af1e1dc225.png"
                    alt="apple-tv"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>“Apple TV+”.</h2>
                <p>
                  “Licious, owned by Delightful Gourmet Pvt Ltd., was founded in
                  July 2015 by Abhay Hanjura and Vivek Gupta and officially
                  launched in October of the same year.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiReact />
                </div>
                <div>
                  <a
                    href=" https://apple-tv-byshubham.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Deployed Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shubhamverma94/-vague-cream-5370"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Github Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
