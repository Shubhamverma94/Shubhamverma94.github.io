import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Text } from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import "./Github.css";

function Github() {
  return (
    <div>
      <hr />
      <br />
      <Text
        borderRadius={"20px"}
        as="b"
        fontSize={{ base: "18px", md: "24px", lg: "36px" }}
        style={{ textShadow: "#FC0 1px 0 10px" }}
        className="section__title_different"
      >
        ##Github_Stats
      </Text>

      <Row style={{ justifyContent: "center", padding: "2% 10%" }}>
        <h1
          style={{
            padding: "20px",
            fontSize: "large",
            // color: "#a891b7",
            textShadow: "#FC0 1px 0 10px",
          }}
        >
          <b
            style={{
              display: "flex",
              // width: "20%",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <span>
            <BiCodeAlt  style={{fontSize:"26px" }}/>
            </span>
            <span>
            ...# Days I Code #...
            </span>
            <span>
              <BiCodeAlt style={{fontSize:"26px" }}/>
              </span>
          </b>
        </h1>
        <div id="githubCalendar">
        <GitHubCalendar
          username="Shubhamverma94"
          blockSize={15}
          blockMargin={10}
          color="green"
          fontSize={18}
          />
          </div>
        <div id="githubImg">
          <img
            title="GitHub State"
            style={{ display: "block", margin: "auto"}}
            src="https://github-readme-stats.vercel.app/api?username=Shubhamverma94&show_icons=true&theme=dark&title_color=A891B7&text_color=F2E9DB"
            frameborder="10"
          ></img>
          <img
            title="GitHub State"
            style={{ display: "block", margin: "auto" }}
            src="https://streak-stats.demolab.com?user=shubhamverma94&fire=A891B7&ring=A891B7&currStreakLabel=A891B7&theme=dark"
            alt="state"
          />
        </div>
        <div id="githubGraph"> 
          <a href="https://github.com/Shubhamverma94/github-readme-activity-graph">
            <img
              alt="Shubhamverma94 Activity Graph"
              src="https://github-readme-activity-graph.cyclic.app/graph?username=Shubhamverma94&bg_color=0&color=a891b7&line=a891b7&point=&hide_border=true"
            />
          </a>
        </div>
      </Row>
    </div>
  );
}

export default Github;
