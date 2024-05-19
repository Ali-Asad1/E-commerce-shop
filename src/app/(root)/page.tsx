import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import Billboard from "@/components/billboard";
import ProductsList from "@/components/products-list";

const mainBillboardId = process.env.NEXT_MAIN_BILLBOARD_ID;

export default async function Home() {
  const billboard = await getBillboard(mainBillboardId as string);
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="container mb-20 space-y-6">
      <Billboard data={billboard} />
      <ProductsList title="Featured Products" items={products} />
    </div>
  );
}
