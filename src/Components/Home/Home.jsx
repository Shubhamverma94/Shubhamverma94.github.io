import React, { useEffect, useRef } from "react";
import {
  Image,
  Text,
  Flex,
  VStack,
  HStack,
  Spacer,
  Container,
  Box,
} from "@chakra-ui/react";
import Name from "../Name/Name";
import "./Home.css";
import MovingComponent from "react-moving-text";

const Home = () => {
  return (
    <div id="Home" style={{ backgroundColor: "#a891b7" }}>
      <>
        <div id="Box1">
          <Text
            zIndex="16"
            fontSize="6xl"
            align="center"
            _hover={{ bg: "#a891b7", color: "black" }}
          >
            <Text style={{ color: "whitesmoke", fontFamily: "cursive" }}>
              {/* Hello.. 👋 */}
              <Image
                src="https://v3ded.github.io/img/blog/helloworld.png"
                width="40%"
              />
            </Text>

            {/* <Text style={{ color: "whitesmoke", fontFamily: "cursive" }}>नमस्ते...... 🙏</Text> */}

            <Text fontSize={{ base: "20px", md: "26px", lg: "32px" }}>
              I'm <Name />. Aspiring{" "}
              <b
                fontSize={{ base: "22px", md: "26px", lg: "32px" }}
                style={{ textShadow: "#FC0 1px 0 10px" }}
              >
                SDET
              </b>{" "}
              ( Software Development Engineer in Test ) at Masai School,
              <MovingComponent
                type="unfold"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                // iteration="10"
                fillMode="none"
              >
                Life Long Learner.
              </MovingComponent>
              {/* link to find more such effects
              https://yidaoj.github.io/react-moving-text/ */}
            </Text>
          </Text>

          <Image
            id="tableGif"
            borderRadius="770% 50% 80% 20%"
            width="50%"
            src="https://i.pinimg.com/originals/16/fe/7e/16fe7e7fb6eebb3087b6dc418748ee56.gif"
          ></Image>
        </div>
      </>
    </div>
  );
};

export default Home;
