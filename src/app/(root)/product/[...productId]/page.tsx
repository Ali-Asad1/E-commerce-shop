import dynamic from "next/dynamic";

import { getProduct } from "@/actions/getProduct";

const Gallery = dynamic(() => import("./_components/gallery"), {
  ssr: false,
  loading: () => <div className="aspect-[2/1.5] animate-pulse rounded-xl bg-muted"></div>,
});

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);

  return (
    <div className="container space-y-4 py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Gallery images={product.images} />
        <div className="">hiii</div>
      </div>
    </div>
  );
};
export default ProductPage;
