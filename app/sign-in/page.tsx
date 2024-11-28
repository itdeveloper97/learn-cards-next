"use client";
import { SignUpSignInForm } from "@/app/features/form/signUpSignInForm/SignUpSignInForm";
import { useAuthActions } from "@/app/shared/hooks/useAuthActions";

export default function Page() {
  const { signIn } = useAuthActions();
  return <SignUpSignInForm onSubmit={signIn} />;
}
