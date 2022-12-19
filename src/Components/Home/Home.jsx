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
    <div style={{ backgroundColor: "#a891b7" }}>
      <>
        <div id="Box1">
          <Text
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

            <Text fontSize={{ base: "12px", md: "24px", lg: "36px" }}>
              I'm <Name />. Aspiring Full Stack Web Developer at Masai School,
              <MovingComponent
                type="unfold"
                duration="1000ms"
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
