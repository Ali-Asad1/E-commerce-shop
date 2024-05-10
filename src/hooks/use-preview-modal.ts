"use client";

import { create } from "zustand";

import { ProductType } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data: ProductType | null;
  onClose: () => void;
  onOpen: (data: ProductType) => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (data) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
