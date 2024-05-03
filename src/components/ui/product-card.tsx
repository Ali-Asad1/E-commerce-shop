"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { ProductType } from "@/types";

import { formatter } from "@/utils/utils";

import { Button } from "./button";

interface ProductCardProps {
  data: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="group cursor-pointer space-y-4 rounded-xl border bg-card p-3 shadow-md transition-colors active:bg-muted">
      <div className="relative aspect-square rounded-xl bg-muted">
        <Image
          src={data.images[0].url}
          alt="product image"
          placeholder="blur"
          blurDataURL={data.images[0].url}
          fill
          className="aspect-square rounded-lg object-cover"
        />
        <div className="absolute bottom-5 w-full opacity-0 transition group-hover:opacity-100">
          <div className="flex items-center justify-center gap-x-6">
            <Button variant="secondary" size="icon">
              <Expand size={20} />
            </Button>
            <Button variant="secondary" size="icon">
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-muted-foreground">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{formatter.format(data.price)}</p>
      </div>
    </div>
  );
};
export default ProductCard;
