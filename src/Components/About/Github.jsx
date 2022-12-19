import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Text } from "@chakra-ui/react";

function Github() {
  return (
    <>
     <br/>
      <Text
        borderRadius={"20px"}
        as="b"
        fontSize={{ base: "18px", md: "24px", lg: "36px" }}
        style={{ textShadow: "#FC0 1px 0 10px" }}
        className="section__title_different"
      >
        ##Github_Stats
      </Text>
      
      <Row style={{ justifyContent: "center", padding: "10%" }}>
        {/* <Text
          borderRadius={"20px"}
          as="b"
          my={50}
          fontSize={{ base: "18px", md: "24px", lg: "36px" }}
          style={{ textShadow: "#FC0 1px 0 10px" }}
          className="section__title_different"
        >
          "Days I Code"
        </Text> */}

        <GitHubCalendar
          username="Shubhamverma94"
          blockSize={15}
          blockMargin={10}
          color="green"
          fontSize={18}
        />
        <div>
          <iframe
            style={{ display: "block", margin: "auto" }}
            src="https://github-readme-stats.vercel.app/api?username=Shubhamverma94&show_icons=true&theme=dark&title_color=FDA117&text_color=F2E9DB"
            frameborder="10"
          ></iframe>
          <iframe
            style={{ display: "block", margin: "auto" }}
            src="https://streak-stats.demolab.com?user=Shubhamverma94&theme=dark"
            alt=""
          />
        </div>
      </Row>
    </>
  );
}

export default Github;
