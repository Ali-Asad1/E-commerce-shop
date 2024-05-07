import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProductType } from "@/types";

import { formatter } from "@/utils/utils";

import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface ProductCardProps {
  data: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Link href={`product/${data.id}`}>
      <div className="group cursor-pointer space-y-4 rounded-xl border bg-card p-3 shadow-md transition-colors active:bg-muted">
        <div className="relative aspect-square rounded-xl bg-muted">
          <Image
            src={data.images[0].url}
            alt="product image"
            placeholder="blur"
            blurDataURL={data.images[0].url}
            fill
            loading="lazy"
            className="aspect-square rounded-lg object-cover"
          />
          <div className="absolute bottom-5 w-full opacity-0 transition group-hover:opacity-100">
            <div className="flex items-center justify-center gap-x-6">
              <Button variant="outline" size="icon">
                <Expand size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className="line-clamp-1 text-lg font-semibold">{data.name}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{data.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-sm text-muted-foreground">{data.category.name}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold">{formatter.format(data.price)}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
