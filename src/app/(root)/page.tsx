import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import Billboard from "@/components/billboard";
import ProductsList from "@/components/products-list";

export default async function Home() {
  const billboard = await getBillboard("65f8b8dc6031f67c23bcadb1");
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="container mb-20 space-y-6">
      <Billboard data={billboard} />
      <ProductsList title="Featured Products" items={products} />
    </div>
  );
}
