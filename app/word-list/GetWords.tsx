"use client";
import { useEffect } from "react";
import { getWordListRequest } from "@/app/shared/api/fireabse/words/get-word-list-request";

export const GetWords = () => {
  useEffect(() => {
    getWordListRequest();
  }, []);
  return <div></div>;
};
