import { Box, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export interface NavbarSublinkProps {
  label: string;
  sublabel?: string;
  href?: string;
}

const NavbarSublink: React.FC<NavbarSublinkProps> = ({
  label,
  sublabel,
  href = "#",
}) => {
  return (
    <NextLink href={href}>
      <Stack
        direction="row"
        align="center"
        p={2}
        rounded={"md"}
        role={"group"}
        _hover={{ bg: "bgHover" }}
      >
        <Box>
          <Text fontWeight={"bold"} _groupHover={{ color: "linkAccent" }}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{sublabel}</Text>
        </Box>
      </Stack>
    </NextLink>
  );
};

export default NavbarSublink;
