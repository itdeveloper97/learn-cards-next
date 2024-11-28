"use client";

import { useEffect } from "react";
import { addCity } from "@/app/shared/api/fireabse/cities/add-city";

export default function Page() {
  useEffect(() => {
    addCity();
  }, []);
  return <div>Add City</div>;
}
