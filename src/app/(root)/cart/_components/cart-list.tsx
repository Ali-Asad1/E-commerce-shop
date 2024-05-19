"use client";

import { useCart } from "@/hooks/use-cart-store";

import { cn } from "@/utils/utils";

import NoResult from "@/components/ui/no-result";

import CartItem from "./cart-item";

interface CartListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CartList: React.FC<CartListProps> = ({ className, ...props }) => {
  const items = useCart((state) => state.items);

  return (
    <div className={cn(className)} {...props}>
      {items.length ? items.map((item) => <CartItem key={`cart-${item.id}`} data={item} />) : <NoResult />}
    </div>
  );
};
export default CartList;
