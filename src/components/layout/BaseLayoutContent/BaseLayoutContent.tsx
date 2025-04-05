"use client";

import React from "react";
import { ScreenSizeProvider } from "@/common/contexts/ScreenSizeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface BaseLayoutContentProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const BaseLayoutContent: React.FC<BaseLayoutContentProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScreenSizeProvider>{children}</ScreenSizeProvider>;
    </QueryClientProvider>
  );
};

export default BaseLayoutContent;
