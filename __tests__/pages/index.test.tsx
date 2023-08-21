import Home from "@/pages";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedTheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
});

describe("Buttons should work", () => {
  test("toggles the theme when clicked", async () => {
    const { parentElement: htmlElement } = render(
      <ChakraProvider theme={mockedTheme}>
        <Home />
      </ChakraProvider>
    ).baseElement;

    const toggleButton = screen.getByTestId("toggle-theme-btn");

    expect(htmlElement).toHaveAttribute("data-theme", "light");
    await userEvent.click(toggleButton);
    expect(htmlElement).toHaveAttribute("data-theme", "dark");
  });
});

describe("Should render elements", () => {
  it("renders slogan heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Share your thoughts to the world/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
