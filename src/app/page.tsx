"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { updateAccessToken } from "@/common/queries/auth";

export default function Home() {
  const router = useRouter();

  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const isLogged = accessToken && refreshToken;

  const setAccessToken = async () => {
    const accessToken = await updateAccessToken();
    localStorage.setItem("access_token", accessToken);
  };

  if (isLogged) {
    router.push("/app");
  } else if (refreshToken && !accessToken) {
    setAccessToken();
    router.push("/app");
  } else if (!refreshToken && !accessToken) {
    router.push("/login");
  }

  return <div></div>;
}
