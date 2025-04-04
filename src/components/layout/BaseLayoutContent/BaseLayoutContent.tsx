"use client";

import React from "react";
import { ScreenSizeProvider } from "@/common/contexts/ScreenSizeContext";

interface BaseLayoutContentProps {
  children: React.ReactNode;
}

const BaseLayoutContent: React.FC<BaseLayoutContentProps> = ({ children }) => {
  return <ScreenSizeProvider>{children}</ScreenSizeProvider>;
};

export default BaseLayoutContent;
