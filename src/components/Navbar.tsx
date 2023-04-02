import { Button, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import NavbarLink from "./NavbarLink";
import { NavbarSublinkProps } from "./NavbarSublink";
import ToggleThemeButton from "./ToggleThemeButton";

export interface NavbarProps {
  items?: { label: string; href?: string; subItems?: NavbarSublinkProps[] }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const spacing = "20px";

  return (
    <Flex justifyContent="space-between" alignItems="center" padding={spacing}>
      <Flex gap={spacing} alignItems="center">
        <NavbarLink label={"Home"} href="/" />
        {items?.map((item) => {
          return (
            <NavbarLink
              key={item.label}
              label={item.label}
              subItems={item.subItems}
            />
          );
        })}
      </Flex>
      <Flex gap={spacing}>
        <ToggleThemeButton variant={"ghost"} />
        <NextLink href={"#"}>
          <Button variant={"ghost"}>Sign in</Button>
        </NextLink>
        <NextLink href={"#"}>
          <Button colorScheme={"accent"}>Sign up</Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
