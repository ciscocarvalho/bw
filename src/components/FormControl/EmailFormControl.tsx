import React from "react";
import { MdEmail } from "react-icons/md";
import FormControlWithIcon from "./FormControlWithIcon";

interface EmailFormControlProps {}

const EmailFormControl: React.FC<EmailFormControlProps> = (props) => {
  return <FormControlWithIcon icon={<MdEmail />} label={"Email"} />;
};

export default EmailFormControl;
