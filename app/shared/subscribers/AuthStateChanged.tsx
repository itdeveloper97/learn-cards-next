"use client";
import { useAuthStateChanged } from "@/app/shared/hooks/useAuthStateChanged";

export const AuthStateChanged = () => {
  useAuthStateChanged();

  return null;
};
