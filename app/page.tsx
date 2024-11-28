import React from "react";
import { NavLink } from "@mantine/core";
import { SignOutButton } from "@/app/shared/ui/signOutButton/SignOutButton";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavLink
        component={Link}
        href={"/sign-up"}
        label={"Sign Up"}
        className={"whitespace-nowrap"}
      />
      <NavLink
        component={Link}
        href={"/sign-in"}
        label={"Sign In"}
        className={"whitespace-nowrap"}
      />
      <NavLink
        component={Link}
        href={"/add-post"}
        label={"Add Post"}
        className={"whitespace-nowrap"}
      />
      <NavLink
        component={Link}
        href={"/add-word"}
        label={"Add Word"}
        className={"whitespace-nowrap"}
      />
      <SignOutButton />
    </div>
  );
}
