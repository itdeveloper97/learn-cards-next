import { auth } from "@/config/firebase";

export const handleSignOut = async () => {
  console.log("sign out works");

  return auth
    .signOut()
    .then(() => {
      console.log("work");
      // Sign-out successful.
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode: ", errorCode);
      console.log("errorMessage: ", errorMessage);
    });
};
