import { Card, CardBody, CardHeader, Center, ColorMode, ColorModeProvider, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Logo from "./Logo";

const useOppositeColorMode = () => {
  const { colorMode } = useColorMode();
  let getOppositeColorMode = () => (colorMode === "dark" ? "light" : "dark");
  let oppositeColorMode: ColorMode = getOppositeColorMode();

  useEffect(() => {
    oppositeColorMode = getOppositeColorMode();
  }, [colorMode]);

  return { oppositeColorMode };
};

const AuthPage: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {
  const { oppositeColorMode } = useOppositeColorMode();

  return (
    <Center height={"100vh"} {...props}>
      <ColorModeProvider value={oppositeColorMode}>
        <Card w={{ sm: "80%", md: "80%", lg: "800px" }} borderRadius={"3xl"} p={"20px"}>
          <CardHeader>
            <Center h={"100%"}>
              <Logo />
            </Center>
          </CardHeader>

          <CardBody h="100%">
            <form style={{ height: "100%" }}>
              <Center
                h={"100%"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"20px"}
                p={{ sm: "0 10%", md: "0 20%" }}
              >
                {children}
              </Center>
            </form>
          </CardBody>
        </Card>
      </ColorModeProvider>
    </Center>
  );
};

export default AuthPage;
