import { Box, Show, Text } from "@chakra-ui/react";
import { NavLink } from "react-bootstrap";

const Name = () => {
  return (
    <Text
      as="b"
      fontSize={{ base: "22px", md: "26px", lg: "32px" }}
      style={{ textShadow: "#FC0 1px 0 10px" }}
    >
      <NavLink href="#Home">Shubham_Verma</NavLink>
    </Text>

    // <Show breakpoint='(max-width: 1000px)'>
    // <Text as="b" fontSize='3xl' style={{ textShadow:"#FC0 1px 0 10px"}}>
    //   Shubham_Verma</Text>

    // </Show>
  );
};

export default Name;
