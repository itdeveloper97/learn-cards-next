"use client";
import { Button } from "@mantine/core";
import React from "react";
import { auth } from "@/config/firebase";
import { handleSignOut } from "@/app/shared/api/fireabse/auth/emailAndPassword/sign-out";

export const SignOutButton = () => {
  const onClick = () => {
    console.log("auth: ", auth.currentUser);
  };
  return (
    <>
      <Button name={"signOut"} onClick={handleSignOut}>
        Sign Out
      </Button>
      <Button onClick={onClick}>Check user</Button>
    </>
  );
};
