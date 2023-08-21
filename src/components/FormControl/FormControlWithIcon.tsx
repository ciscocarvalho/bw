import { FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { HTMLInputTypeAttribute, ReactElement, useRef } from "react";

interface FormControlWithIconProps {
  icon: ReactElement;
  inputType?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  propagateIconClick?: boolean;
}

const FormControlWithIcon: React.FC<FormControlWithIconProps> = ({
  icon,
  inputType,
  label,
  placeholder,
  propagateIconClick = true,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <FormControl>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <InputGroup>
        <Input placeholder={placeholder} type={inputType ?? "text"} h={"3rem"} ref={inputRef} />
        <InputRightElement
          mr={"0.5rem"}
          top={"50%"}
          transform={"translateY(-50%)"}
          onClick={() => {
            if (propagateIconClick && inputRef.current) inputRef.current.focus();
          }}
        >
          {icon}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default FormControlWithIcon;
