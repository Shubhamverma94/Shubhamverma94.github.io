import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show, Hide,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
 
} from "@chakra-ui/icons";
import Photo from "../Home/Photo";
import Name from "../Name/Name";
import { saveAs } from "file-saver";

export default function Navbar() {
 
  const { colorMode, toggleColorMode } = useColorMode();

  const onButtonClick = () => {
    saveAs(
      "https://drive.google.com/file/d/108WaoPUeUO0ZgMqNjcS3E-L4k0pA74vs/view"
    );
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={9} width={["100%"]}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="40%">
            <Name />
<Show breakpoint='(min-width: 600px)'> <Photo /></Show>
           
          </HStack>

          <Show  breakpoint='(min-width: 600px)' >
          <Box>
            <Button>
              <b>Home</b>
              </Button>
              <Show breakpoint='(min-width: 950px)'>
            <Button >
              <b>About</b>
            </Button>
              </Show>
              <Show breakpoint='(min-width: 950px)'>
            <Button>
              <b>Skills</b>
                </Button>
              </Show>
              {/* <Show breakpoint="(min-width:799px)"> */}
            <Button >
              <b>Projects</b>
            </Button>
              {/* </Show> */}
            <Button>
              <b>Contact</b>
            </Button>
          </Box>
</Show>
          {/* <Box>
            <Button>
              <b>Home</b>
            </Button>
            <Button>
              <b>About</b>
            </Button>
            <Button>
              <b>Skills</b>
            </Button>
            <Button>
              <b>Projects</b>
            </Button>
            <Button>
              <b>Contact</b>
            </Button>
          </Box> */}

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
                size={["sm","md"]}
              >
                {/* <a
                  href="https://drive.google.com/file/d/108WaoPUeUO0ZgMqNjcS3E-L4k0pA74vs/view?usp=sharing"
                  target="_blank"
                  download="https://drive.google.com/file/d/108WaoPUeUO0ZgMqNjcS3E-L4k0pA74vs/view?usp=sharing"
                >
                  RESUME
                </a> */}
                <Link
                  id="navRes"
                  href="https://drive.google.com/file/d/108WaoPUeUO0ZgMqNjcS3E-L4k0pA74vs/view"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  download
                >
                  RESUME
                </Link>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
