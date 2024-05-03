import { ProductType } from "@/types";

import NoResult from "./ui/no-result";
import ProductCard from "./ui/product-card";

interface ProductsListProps {
  title: string;
  items: ProductType[];
}

const ProductsList: React.FC<ProductsListProps> = ({ title, items }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-3xl font-bold">{title}</h3>
      {!items.length && <NoResult />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
