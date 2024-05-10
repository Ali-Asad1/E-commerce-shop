"use client";

import { Expand } from "lucide-react";

import { ProductType } from "@/types";

import { usePreviewModal } from "@/hooks/use-preview-modal";

import { Button } from "./button";

interface PreviewButtonProps {
  data: ProductType;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ data }) => {
  const { onOpen } = usePreviewModal();

  const onPreviewClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onOpen(data);
  };

  return (
    <Button variant="outline" size="icon" onClick={onPreviewClick}>
      <Expand size={20} />
    </Button>
  );
};
export default PreviewButton;
