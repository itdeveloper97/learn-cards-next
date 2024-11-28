"use client";
import { getCities } from "@/app/shared/api/fireabse/cities/get-cities";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    getCities();
  }, []);
  return <div>Cities</div>;
}
