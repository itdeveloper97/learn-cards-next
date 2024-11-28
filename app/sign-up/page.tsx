"use client";

import { SignUpSignInForm } from "@/app/features/form/signUpSignInForm/SignUpSignInForm";
import { useAuthActions } from "@/app/shared/hooks/useAuthActions";

const Page = () => {
  const { signUp } = useAuthActions();

  return <SignUpSignInForm onSubmit={signUp} />;
};
export default Page;
