import AuthFormFooter from "@/components/AuthFormFooter";
import AuthPage from "@/components/AuthPage";
import EmailFormControl from "@/components/FormControl/EmailFormControl";
import PasswordFormControl from "@/components/FormControl/PasswordFormControl";
import UsernameFormControl from "@/components/FormControl/UsernameFormControl";
import { AuthFormKind } from "@/components/Types/AuthFormKind";
import React from "react";

interface signUpProps {}

const SignUp: React.FC<signUpProps> = (props) => {
  return (
    <AuthPage>
      <UsernameFormControl />
      <EmailFormControl />
      <PasswordFormControl />
      <AuthFormFooter formType={AuthFormKind.SignUp} />
    </AuthPage>
  );
};

export default SignUp;
