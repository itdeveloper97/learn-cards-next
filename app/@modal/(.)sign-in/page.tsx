"use client";
import { SignUpSignInForm } from "@/app/features/form/signUpSignInForm/SignUpSignInForm";
import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useAuthActions } from "@/app/shared/hooks/useAuthActions";

export default function Page() {
  const router = useRouter();
  const { signIn } = useAuthActions();

  return (
    <Modal title={"Sign In"} opened={true} onClose={router.back}>
      <SignUpSignInForm onSubmit={signIn} />
    </Modal>
  );
}
