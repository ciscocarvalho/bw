import SignIn from "@/pages/signin";
import { render, screen } from "@testing-library/react";

const testFormControlByLabelText = (labelText: string) => {
  const formControl = screen.getByLabelText(labelText);
  expect(formControl).toBeInTheDocument();
};

describe("Should render form controls", () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  it("renders email form control", () => {
    testFormControlByLabelText("Email");
  });

  it("renders password form control", () => {
    testFormControlByLabelText("Password");
  });
});
