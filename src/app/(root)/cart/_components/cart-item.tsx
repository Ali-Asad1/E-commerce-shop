"use client";

import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { ProductType } from "@/types";

import { useCart } from "@/hooks/use-cart-store";

import { formatter } from "@/utils/utils";

import { Button } from "@/components/ui/button";

interface CartItemProps {
  data: ProductType;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const removeItem = useCart((state) => state.removeItem);

  const removeHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    removeItem(data.id);
    toast("Item removed from cart", {
      icon: <Trash />,
    });
  };

  return (
    <Link href={`/product/${data.id}`} className="block">
      <div className="relative flex h-36 w-full gap-x-4 overflow-hidden rounded-md shadow-md transition-shadow hover:shadow-lg">
        <Button
          variant="destructive"
          size="icon"
          className="absolute bottom-2 right-4"
          onClick={(e) => removeHandler(e)}
        >
          <Trash className="size-4" />
        </Button>
        <div className="h-full w-24 bg-muted sm:w-32">
          <Image
            src={data.images[0].url}
            alt="product image"
            width={128}
            height={128}
            className="size-full object-contain"
          />
        </div>
        <div className="flex-1 space-y-2 py-4 pr-4">
          <div className="flex">
            <h3 className="line-clamp-2 w-3/4 text-sm font-medium md:text-xl">{data.name}</h3>
            <p className="ml-auto text-sm font-bold md:text-base">{formatter.format(data.price)}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">Color: </span>
            {data.color.name}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">Size: </span>
            {data.size.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default CartItem;
