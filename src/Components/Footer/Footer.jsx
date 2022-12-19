import {
  Box,
  Center,
  HStack,
  VStack,
  Image,
  Spacer,
  Text,
  Container,
  StackDivider,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ImHome } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import Name from "../Name/Name";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <Name />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Container>
        <HStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={14}
          align="stretch"
        >
          <Box>
            <Box>
              <a
                href="imkannu.shubham@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail size={40} />
              </a>
              <Badge borderRadius='full' px='4' colorScheme='purple'><b>GMAIL</b></Badge>
            </Box>
            <Box>
              <a
                href="imkannu.shubham@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillTelephoneFill size={40} />
              </a>
             <Badge borderRadius='full' px='4' colorScheme='purple'> <b>TELEPHONE</b></Badge>
            </Box>
          </Box>

          <VStack className="footer__socials">
            <Box>
              <a
                href="https://github.com/Shubhamverma94"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={40} />
              </a>

              <Badge borderRadius='full' px='4' colorScheme='purple'><b>GITHUB</b></Badge>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/in/shubhamverma17/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={40} />
              </a>
              <Badge borderRadius='full' px='4' colorScheme='purple'><b>LINKEDIN</b></Badge>
            </Box>

            <Box>
              <a
                href="https://twitter.com/kannu_shubham17"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={40} />
              </a>
              <Badge borderRadius='full' px='4' colorScheme='purple'><b>TWITTER</b></Badge>
            </Box>
          </VStack>
          <Box>
            <a target="_blank" rel="noreferrer">
              <ImHome size={40} />
            </a>
            <Badge borderRadius='full' px='4' colorScheme='purple'><b>LOCATION</b></Badge>
          </Box>
        </HStack>
      </Container>
    </footer>
  );
};

export default Footer;
