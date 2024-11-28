"use client";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { UserStoreProvider } from "@/app/shared/providers/user-store-provider";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <UserStoreProvider>{children}</UserStoreProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
};
