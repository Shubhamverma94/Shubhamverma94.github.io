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
import { FaCopyright, FaGithub, FaHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ImHome } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import Name from "../Name/Name";
import "./Footer.css";
import ActiveIndicator from "../ActiveIndicator/ActiveIndicator";


const Footer = () => {

  return (
    <div id="Contact">
      <hr />
      <br />
      <Text
        borderRadius={"20px"}
        as="b"
        fontSize={{ base: "18px", md: "24px", lg: "36px" }}
        style={{ textShadow: "#FC0 1px 0 10px" }}
        className="section__title_different"
      >
        ##Contact
      </Text>
      {/* <h2>Contact</h2> */}
      <footer>
        <a href="#home" className="footer__logo" >
        <ActiveIndicator/>
          <Name />
          <ActiveIndicator/>
        </a>
        {/* <ul className="permalinkss">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}

        <Center className="footerLast">
          {/* <HStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={14}
          align="stretch"
        > */}
          <Box id="footer__socials" className="permalinks">
            <Box
              border={"0px solid red"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=imkannu.shubham@gmail.com&cc=imkannu.shubham@gmail.com&bcc=imkannu.shubham@gmail.com&su=Noticed Your Work. Let's connect.&body=Hey Shubham! Drop your Resume."
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail size={40} />
              </a>
              <Badge borderRadius="full" px="4" colorScheme="purple">
                <b>GMAIL</b>
              </Badge>
              <Center>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=imkannu.shubham@gmail.com&cc=imkannu.shubham@gmail.com&bcc=imkannu.shubham@gmail.com&su=Noticed Your Work. Let's connect.&body=Hey Shubham! Drop your Resume."
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>imkannu.shubham@gmail.com</b>
                </a>
              </Center>
            </Box>
            <Box
              border={"0px solid red"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <a href="tel:9074967678" target="_blank" rel="noreferrer">
                <BsFillTelephoneFill size={40} />
              </a>
              <Badge borderRadius="full" px="4" colorScheme="purple">
                {" "}
                <b>TELEPHONE</b>
              </Badge>
              <Center>
                <a href="tel:9074967678" target="_blank" rel="noreferrer">
                  <b>+91-9074967678</b>
                </a>
              </Center>
            </Box>
            {/* </Box> */}

            {/* <VStack className="footer__socials"> */}
            {/* <Box className="footer__socials"> */}
            <Box
              border={"0px solid red"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <a
                href="https://github.com/Shubhamverma94"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={40} />
              </a>

              <Badge borderRadius="full" px="4" colorScheme="purple">
                <b>GITHUB</b>
              </Badge>
              <b>
                {" "}
                <a
                  href="https://github.com/Shubhamverma94"
                  target="_blank"
                  rel="noreferrer"
                >
                  /Shubhamverma94
                </a>
              </b>
            </Box>
            <Box
              border={"0px solid red"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <a
                href="https://www.linkedin.com/in/shubhamverma17/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={40} />
              </a>
              <Badge borderRadius="full" px="4" colorScheme="purple">
                <b>LINKEDIN</b>
              </Badge>
              <b>
                <a
                  href="https://www.linkedin.com/in/shubhamverma17/"
                  target="_blank"
                  rel="noreferrer"
                >
                  /shubhamverma17
                </a>
              </b>
            </Box>

            <Box
              border={"0px solid red"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <a
                href="https://twitter.com/kannu_shubham17"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={40} />
              </a>
              <Badge borderRadius="full" px="4" colorScheme="purple">
                <b>TWITTER</b>
              </Badge>
              <b>
                {" "}
                <a
                  href="https://twitter.com/kannu_shubham17"
                  target="_blank"
                  rel="noreferrer"
                >
                  /kannu_shubham17
                </a>
              </b>
            </Box>
            {/* </Box> */}
            {/* <Box className="footer__socials"> */}
            <Box
              border={"0px solid red"}
              display={"flex"}
              flexDirection={"column"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <a
                style={{ border: "1 px solid red" }}
                target="_blank"
                rel="noreferrer"
              >
                <ImHome size={40} />
              </a>
              <Badge borderRadius="full" px="4" colorScheme="purple">
                <b>LOCATION</b>
              </Badge>
              <a>
                <b>Gwalior, M.P., India, 474001</b>
              </a>
            </Box>
          </Box>
          {/* </HStack> */}
        </Center>
        <Badge
          borderRadius="full"
          px="8"
          py="4"
          colorScheme="#ffeca2"
          className="footerBox"
        >
          <p className="footer">
            {/* <span
              style={{
                color: `red`,
                background: `transparent`,
                fontFamily: "cursive",
              }}
            >
              Thank-you
            </span>{" "} */}
            <span>
              <p>
                Copyright © <b>Shubham Verma</b>
              </p>
            </span>
            {/* <Badge colorScheme="gray" borderRadius="full">
              Made with ❤️
            </Badge> */}
          </p>
        </Badge>
      </footer>
   
    </div>
  );
};

export default Footer;
