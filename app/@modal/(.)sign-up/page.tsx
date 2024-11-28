"use client";
import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation";
import { SignUpSignInForm } from "@/app/features/form/signUpSignInForm/SignUpSignInForm";
import { useAuthActions } from "@/app/shared/hooks/useAuthActions";

export default function Page() {
  const router = useRouter();
  const { signUp } = useAuthActions();
  return (
    <Modal title={"Sign Up"} opened={true} onClose={router.back}>
      <SignUpSignInForm onSubmit={signUp} />
    </Modal>
  );
}
