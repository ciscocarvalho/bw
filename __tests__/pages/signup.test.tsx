import SignUp from "@/pages/signup";
import { render, screen } from "@testing-library/react";

const testFormControlByLabelText = (labelText: string) => {
  const formControl = screen.getByLabelText(labelText);
  expect(formControl).toBeInTheDocument();
};

describe("Should render form controls", () => {
  beforeEach(() => {
    render(<SignUp />);
  });

  it("renders username form control", () => {
    testFormControlByLabelText("Username");
  });

  it("renders email form control", () => {
    testFormControlByLabelText("Email");
  });

  it("renders password form control", () => {
    testFormControlByLabelText("Password");
  });
});
