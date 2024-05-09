import dynamic from "next/dynamic";
import { Suspense } from "react";

import { formatter } from "@/utils/utils";

import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";

import ProductsList from "@/components/products-list";
import ProductCardLoading from "@/components/ui/product-card-loading";
import { Separator } from "@/components/ui/separator";

import AddToCartBtn from "./_components/add-to-cart-btn";

const Gallery = dynamic(() => import("./_components/gallery"), {
  ssr: false,
  loading: () => <div className="aspect-[2/1.5] animate-pulse rounded-xl bg-muted"></div>,
});

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);
  return (
    <div className="container space-y-4 py-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Gallery images={product.images} />
        <div className="space-y-2">
          <h2 className="font-poppins text-2xl font-semibold">{product.name}</h2>
          <p className="text-lg font-medium">{formatter.format(product.price)}</p>
          <Separator className="!my-4" />
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold">Size:</h3>
            <span>{product.size.name}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold">Color:</h3>
            <div className="size-6 rounded-full border-2" style={{ backgroundColor: product.color.value }} />
          </div>
          <AddToCartBtn className="!mt-10" />
        </div>
      </div>
      <Separator className="!my-10" />
      <Suspense fallback={<RelatedProductsLoading />}>
        <RelatedProducts categoryId={product.category.id} />
      </Suspense>
    </div>
  );
};

const RelatedProductsLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(4)
        .fill(1)
        .map((_, i) => (
          <ProductCardLoading key={`id-${i + 1}`} />
        ))}
    </div>
  );
};

const RelatedProducts = async ({ categoryId }: { categoryId: string }) => {
  const relatedProducts = await getProducts({ isFeatured: true, categoryId });
  return <ProductsList title="Related Products" items={relatedProducts} />;
};

export default ProductPage;
