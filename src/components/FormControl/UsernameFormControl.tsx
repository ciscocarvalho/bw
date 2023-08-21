import React from "react";
import { MdPerson } from "react-icons/md";
import FormControlWithIcon from "./FormControlWithIcon";

interface UsernameFormControlProps {}

const UsernameFormControl: React.FC<UsernameFormControlProps> = (props) => {
  return <FormControlWithIcon icon={<MdPerson />} label={"Username"} />;
};

export default UsernameFormControl;
