import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { forwardRef, ReactNode } from "react";
import NavbarSubitem, { NavbarSublinkProps } from "./NavbarSublink";

interface NavbarLinkProps {
  label: string;
  href?: string;
  subItems?: NavbarSublinkProps[];
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  label,
  subItems,
  href = "#",
}) => {
  const Link = forwardRef<null, { children?: ReactNode }>(
    ({ children, ...props }, ref) => {
      return (
        <NextLink href={href} {...props} ref={ref}>
          <Text
            _hover={{ color: "linkHover" }}
            color={"linkNormal"}
            fontSize={"xl"}
          >
            {label}
          </Text>
          {children}
        </NextLink>
      );
    }
  );

  if (!subItems || subItems.length === 0) {
    return <Link />;
  }

  return (
    <Popover trigger={"hover"} placement={"bottom-start"}>
      <PopoverTrigger>
        <Link />
      </PopoverTrigger>
      <PopoverContent p={4} rounded={"xl"}>
        {subItems.map((subItem) => {
          return (
            <NavbarSubitem
              key={subItem.label}
              label={subItem.label}
              sublabel={subItem.sublabel}
              href={subItem.href}
            />
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default NavbarLink;
