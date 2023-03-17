import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import NextLink from "next/link";
import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import { NavbarSublinkProps } from "./NavbarSublink";

export interface NavbarProps {
  items?: { label: string; href?: string; subItems?: NavbarSublinkProps[] }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const animation = useAnimation();
  const [angle, setAngle] = useState(360);
  const spacing = "20px";

  const animateColorModeIcon = async () => {
    await animation.start({
      rotate: angle,
      transition: { duration: 0.5 },
      type: "spring",
    });
    setAngle(angle === Number.MAX_SAFE_INTEGER ? 0 : angle + 360);
  };

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
        <Button
          onClick={() => {
            toggleColorMode();
            animateColorModeIcon();
          }}
          variant={"ghost"}
        >
          <motion.div animate={animation}>
            {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
          </motion.div>
        </Button>
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
