"use client";

import { add, format } from "date-fns";
import Link from "next/link";

import { useCart } from "@/hooks/use-cart-store";

import { cn, formatter } from "@/utils/utils";

import { Button } from "@/components/ui/button";

interface SummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Summary: React.FC<SummaryProps> = ({ className, ...props }) => {
  const items = useCart((state) => state.items);

  const totalItemsPrice = items.reduce((total, curr) => total + curr.price, 0);
  const tax = (totalItemsPrice / 100) * 10;
  const finalPrice = totalItemsPrice + tax;

  const deliveryTime = format(add(new Date(), { days: 10 }), "d MMM yyyy");

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="sticky top-2 h-fit w-full rounded-lg p-8 shadow-lg ">
        <h2 className="mb-6 text-2xl font-bold">Total</h2>
        <div className="mb-8 space-y-4">
          <div className="flex items-center">
            <p className="">Subtotal</p>
            <p className="ml-auto font-bold">{formatter.format(totalItemsPrice)}</p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <p className="text-muted-foreground">Items in order</p>
            <p className="ml-auto">{items.length}</p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <p className="text-muted-foreground">Delivery</p>
            <p className="ml-auto">Free</p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <p>Tax</p>
            <p className="ml-auto">+ {formatter.format(tax)}</p>
          </div>
        </div>
        <div className="space-y-4">
          <Button className="w-full" disabled={!items.length}>
            Checkout {formatter.format(finalPrice)}
          </Button>
          <Button variant="secondary" asChild className="w-full">
            <Link href="/">Cancel</Link>
          </Button>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Estimated Delivery by <span className="font-semibold text-primary">{deliveryTime}</span>
        </p>
      </div>
    </div>
  );
};
export default Summary;
