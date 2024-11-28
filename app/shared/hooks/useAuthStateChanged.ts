import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/app/shared/providers/user-store-provider";

export const useAuthStateChanged = () => {
  const { set } = useUserStore((s) => s);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        set(user);
        console.log("User is signed in:", user);
      } else {
        console.log("No user is signed in");
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [set]);
};
