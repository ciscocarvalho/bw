import { Button, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { AuthFormKind } from "./Types/AuthFormKind";

interface AuthFormFooterProps {
  formType: AuthFormKind;
}

const AuthFormFooter: React.FC<AuthFormFooterProps> = ({ formType }) => {
  const isSignIn = formType === AuthFormKind.SignIn;

  return (
    <Flex align={"center"} w={"100%"} direction={"column"} mt={"20px"} gap={"20px"}>
      <Button type="submit" colorScheme={"accent"}>
        {isSignIn ? "Sign in" : "Sign up"}
      </Button>
      <Text>
        {isSignIn ? "Don't have an account yet? " : "Already have an account? "}
        <Link as={NextLink} href={isSignIn ? "signup" : "signin"} colorScheme={"accent"}>
          {isSignIn ? "Sign up" : "Sign in"}
        </Link>
      </Text>
    </Flex>
  );
};

export default AuthFormFooter;
