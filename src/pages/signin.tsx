import AuthFormFooter from "@/components/AuthFormFooter";
import AuthPage from "@/components/AuthPage";
import EmailFormControl from "@/components/FormControl/EmailFormControl";
import PasswordFormControl from "@/components/FormControl/PasswordFormControl";
import { AuthFormKind } from "@/components/Types/AuthFormKind";
import React from "react";

interface signInProps {}

const SignIn: React.FC<signInProps> = () => {
  return (
    <AuthPage>
      <EmailFormControl />
      <PasswordFormControl />
      <AuthFormFooter formType={AuthFormKind.SignIn} />
    </AuthPage>
  );
};

export default SignIn;
