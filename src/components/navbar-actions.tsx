"use client";

import { ShoppingBag } from "lucide-react";

import { useCart } from "@/hooks/use-cart-store";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const NavbarActions = () => {
  const count = useCart((state) => state.items.length);

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <div className="relative">
        <Button size="icon">
          <ShoppingBag className="h-5 w-5" />
        </Button>
        <Badge variant="destructive" className="pointer-events-none absolute -bottom-1.5 -left-1.5 select-none px-1.5">
          {count}
        </Badge>
      </div>
    </div>
  );
};
export default NavbarActions;
