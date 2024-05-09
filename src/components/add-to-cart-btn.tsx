import { ShoppingBasket } from "lucide-react";

import { cn } from "@/utils/utils";

import { Button } from "@/components/ui/button";

interface AddToCartBtnProps {
  className?: string;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ className }) => {
  return (
    <Button className={cn("flex items-center gap-x-2 font-poppins", className)}>
      Add To Cart <ShoppingBasket size={20} strokeWidth={2} />
    </Button>
  );
};
export default AddToCartBtn;
