import React from "react";
import "./Projects.css";
import { Button, Text } from "@chakra-ui/react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiCypress,
  SiCucumber,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { RiLiveFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import lifestyle from "../Projects/lifestyle.png";

export const Projects = () => {
  return (
    <div id="Projects">
      <hr />
      <br />
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
        <br />
        <br />
        {/* <p className="section__title_different">recently worked on:-</p> */}
        <div className="allProjects">
          {/* 1st */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={lifestyle} alt="Lifestyle Store - eCommerce" />
                </div>
              </div>
              <div className="project_information">
                <h2>“LifeStyle Store”.</h2>
                <p>
                  Lifestyle is India's leading fashion destination for the
                  latest trends. Lifestyle brings multiple categories including
                  men, women and kids’ apparel, footwear, handbags, fashion
                  accessories and beauty under the convenience of a single roof.
                </p>
                <div>
                  <SiCypress />
                  <SiCucumber />
                  <SiJavascript />
                
                </div>
                <div>
                  <a
                    href="https://inspiring-empanada-77b05a.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="button" className="btns onbt onbt">
                      View REPORT-- <RiLiveFill />
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Shubhamverma94/LifeStyle-Store/tree/main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="button" className="btns onbt">
                      Source CODE-- <FaGithub />
                    </Button>
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
                  stats and team rankings.Cricbuzz is one of the most popular
                  mobile apps for cricket news and scores in India.
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
                    <Button type="button" className="btns onbt onbt">
                      View LIVE-- <RiLiveFill />
                    </Button>
                  </a>
                  <a
                    href="https://github.com/spvhantale/Cricbuzz_Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="button" className="btns onbt">
                      Source CODE-- <FaGithub />
                    </Button>
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
                  superior quality fruits.India's finest fruits and veggies
                  Handpicked at farms + Grown responsibly 100% Traceability by
                  scanning a QR code.
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
                    <Button type="button" className="btns onbt onbt">
                      View LIVE-- <RiLiveFill />
                    </Button>
                  </a>
                  <a
                    href="https://github.com/prayagp8/TEAM-ALPHA-KIMAYE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="button" className="btns onbt">
                      Source CODE-- <FaGithub />
                    </Button>
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
                  Streaming services, streamlined. Easily discover all your
                  favorite shows. Enjoy all the top-rated prime-time TV shows,
                  live sports, and news — from leading cable providers — on
                  demand right on the Apple TV.
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
                    <Button type="button" className="btns onbt onbt">
                      View LIVE-- <RiLiveFill />
                    </Button>
                  </a>
                  <a
                    href="https://github.com/Shubhamverma94/-vague-cream-5370"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button type="button" className="btns onbt">
                      Source CODE-- <FaGithub />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
