import { Text, TypographyProps } from "@chakra-ui/react";
import React from "react";

interface LogoProps {
  fontSize?: TypographyProps["fontSize"];
}

const Logo: React.FC<LogoProps> = ({ fontSize = "7xl" }) => {
  return (
    <Text cursor={"default"} userSelect={"none"} fontSize={fontSize}>
      BW
    </Text>
  );
};

export default Logo;
