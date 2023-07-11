import { FC } from "react";
import { Icons } from "./Icons";

const SignIn: FC = () => {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a breadit accout and agree to our
          User Agreement and Privacy Policy
        </p>
      </div>
    </div>
  );
};
export default SignIn;
