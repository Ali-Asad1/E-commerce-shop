"use client";

import { ShoppingBasket, ShoppingCart } from "lucide-react";

import { ProductType } from "@/types";

import { useCart } from "@/hooks/use-cart-store";

import { cn } from "@/utils/utils";

import { Button } from "@/components/ui/button";

interface AddToCartBtnProps {
  className?: string;
  iconButton?: boolean;
  data: ProductType;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ className, iconButton, data }) => {
  const { addItem } = useCart();

  const addToCartHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    addItem(data);
  };

  const element = iconButton ? (
    <Button variant="outline" size="icon" onClick={addToCartHandler}>
      <ShoppingCart size={20} />
    </Button>
  ) : (
    <Button className={cn("flex items-center gap-x-2 font-poppins", className)} onClick={addToCartHandler}>
      Add To Cart <ShoppingBasket size={20} strokeWidth={2} />
    </Button>
  );

  return element;
};
export default AddToCartBtn;
