import { baseTheme, extendTheme, ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  components: {
    Link: {
      variants: {
        primary: ({ colorScheme = "primary" }) => ({
          color: `${colorScheme}.200`,
          _hover: {
            color: `accent.400`,
          },
        }),
      },
      defaultProps: { variant: "primary" },
    },
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: { accent: baseTheme.colors.blue },
  styles: {
    global: {
      "a:-webkit-any-link": { _hover: { textDecoration: "none" } },
      img: { userSelect: "none" },
    },
  },
  semanticTokens: {
    colors: {
      primary: { default: "blue.50", _dark: "gray.900" },
      accent: { default: "#3182CE", _dark: "#90CDF4" },
      bgHover: { default: "blue.50", _dark: "gray.600" },
      linkNormal: { default: "gray.600", _dark: "gray.200" },
      linkHover: { default: "gray.800", _dark: "white" },
      linkAccent: { default: "blue.500", _dark: "blue.300" },
    },
  },
};

export default extendTheme(theme);
