"use client";
import { getCity } from "@/app/shared/api/fireabse/cities/get-city";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    getCity();
  }, []);

  return <div>city</div>;
}
