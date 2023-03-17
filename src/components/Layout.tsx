import { Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Navbar, { NavbarProps } from "./Navbar";

interface LayoutProps {
  navbarProps?: NavbarProps;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ navbarProps, children, ...props }) => {
  return (
    <Stack height={"100vh"} {...props}>
      <Navbar {...navbarProps} />
      {children}
    </Stack>
  );
};

export default Layout;
