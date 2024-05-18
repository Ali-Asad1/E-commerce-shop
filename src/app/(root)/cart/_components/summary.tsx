"use client";

import { useCart } from "@/hooks/use-cart-store";

import { formatter } from "@/utils/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Summary = () => {
  const items = useCart((state) => state.items);
  const totalPrice = items.reduce((total, curr) => total + curr.price, 0);

  return (
    <div className="h-fit w-full rounded-lg p-4 shadow-lg">
      <h2 className="text-2xl font-bold">Summary</h2>
      <Separator className="my-4" />
      <div className="flex items-center">
        <p className="font-medium">Total Price:</p>
        <p className="ml-auto font-semibold">{formatter.format(totalPrice)}</p>
      </div>
      <Button className="mt-5 w-full">Checkout</Button>
    </div>
  );
};
export default Summary;
