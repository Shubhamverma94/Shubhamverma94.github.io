import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import Photo from "../Home/Photo";
import Name from "../Name/Name";
import "./Navbar.css";
import Shubham_Verma_Resume from "../../assests/Shubham_Verma_Resume.pdf";
import { NavLink } from "react-bootstrap";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onButtonClick = () => {
    window.open(Shubham_Verma_Resume);
  };

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={{ base: 5, md: 9,  }}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="25%">
            <Name />

            <Show breakpoint="(min-width: 1400px)">
              {" "}
              <Photo />
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
           
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                  <NavLink href="#Home">
                    {" "}
                    <b>Home</b>
                  </NavLink>
                </Button>

                <Button className="btnRes">
                  <NavLink href="#About">
                    <b>About</b>
                  </NavLink>
                </Button>

                <Button className="btnRes">
                  <NavLink href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </NavLink>
                </Button>

                <Button className="btnRes">
                  <NavLink href="#Projects">
                    <b>Projects</b>
                  </NavLink>
                </Button>

                <Button className="btnRes">
                  <NavLink href="#Contact">
                    <b>Contact</b>
                  </NavLink>
                </Button>
              </HStack>
            </HStack>
          </Flex>

         
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button
                backgroundColor="#a891b7"
                _hover={{ bg: "#a891b7", color: "black" }}
                color="white"
                variant="solid"
                onClick={onButtonClick}
                size={["sm", "md"]}
                download="Shubham_Verma_Resume"
                id="resumeBtn"
              >
                <a
                  href={Shubham_Verma_Resume}
                  target="_blank"
                  rel="noreferrer"
                  download="Shubham_Verma_Resume"
                >
                  RESUME
                </a>
                {/* <Link
                    id="navRes"
                    href={Shubham_Verma_Resume}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    download="Shubham_Verma_Resume"
                  >
                    RESUME
                  </Link> */}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  backgroundColor="#a891b7"
                  border={"1px solid"}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  backgroundColor="#a891b7"
                  border={"1px solid"}
                >
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  backgroundColor="#a891b7"
                  border={"1px solid"}
                >
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  backgroundColor="#a891b7"
                  border={"1px solid"}
                >
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  backgroundColor="#a891b7"
                  border={"1px solid"}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
