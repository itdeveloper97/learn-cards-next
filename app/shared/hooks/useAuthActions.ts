import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/app/shared/api/fireabse/auth/emailAndPassword/sign-in";
import { setCookie } from "@/app/shared/helpers/cookie";
import { signUp } from "@/app/shared/api/fireabse/auth/emailAndPassword/sign-up";
import { useRouter } from "next/navigation";

export const useAuthActions = () => {
  const router = useRouter();

  const onSuccess = () => {
    console.log("onSuccess");
    setCookie("isAuth", String(true), 1);
    setTimeout(router.back);
  };

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess,
  });

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess,
  });

  return { signIn: signInMutation.mutate, signUp: signUpMutation.mutate };
};
