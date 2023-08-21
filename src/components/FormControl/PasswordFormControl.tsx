import { IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import FormControlWithIcon from "./FormControlWithIcon";

interface PasswordFormControlProps {}

const PasswordFormControl: React.FC<PasswordFormControlProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <FormControlWithIcon
      icon={
        <IconButton
          aria-label={isVisible ? "Hide password" : "Show password"}
          icon={isVisible ? <MdVisibilityOff /> : <MdVisibility />}
          onClick={() => setIsVisible(!isVisible)}
          background={"none"}
          borderRadius={"50%"}
        />
      }
      label={"Password"}
    />
  );
};

export default PasswordFormControl;
