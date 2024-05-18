"use client";

import { useCart } from "@/hooks/use-cart-store";

import NoResult from "@/components/ui/no-result";

import CartItem from "./cart-item";

const CartList = () => {
  const items = useCart((state) => state.items);

  return (
    <div className="space-y-4">
      {items.length ? items.map((item) => <CartItem key={`cart-${item.id}`} data={item} />) : <NoResult />}
    </div>
  );
};
export default CartList;
