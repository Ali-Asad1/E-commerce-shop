import React from "react";

import ModalProvider from "@/providers/modal-provider";

import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ModalProvider />
      <Toaster />
      {children}
    </>
  );
};
export default Providers;
