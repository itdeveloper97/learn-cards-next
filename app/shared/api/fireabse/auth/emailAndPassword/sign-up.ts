import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignInSignUpWithEmailAndPasswordParams } from "@/app/shared/api/fireabse/auth/emailAndPassword/types";

export const signUp = async ({
  email,
  password,
}: SignInSignUpWithEmailAndPasswordParams) => {
  if (!email || !password) {
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user: ", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode: ", errorCode);
      console.log("errorMessage: ", errorMessage);
    });
};
