"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isLogged = false;

  if (isLogged) {
    router.push("/app");
    return;
  }

  router.push("/login");

  return <div></div>;
}
