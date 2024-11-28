"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { SignInSignUpWithEmailAndPasswordParams } from "@/app/shared/api/fireabse/auth/emailAndPassword/types";

export const signIn = async ({
  email,
  password,
}: SignInSignUpWithEmailAndPasswordParams) => {
  if (!email || !password) {
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("errorCode: ", errorCode);
      console.log("errorMessage: ", errorMessage);
    });
};
