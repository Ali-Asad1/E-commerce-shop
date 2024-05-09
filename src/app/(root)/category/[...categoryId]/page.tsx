import { Suspense } from "react";

import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";

import Billboard from "@/components/billboard";
import ProductsList from "@/components/products-list";

import Filter from "./_components/filter";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    size?: string;
    color?: string;
  };
}

const Page: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {
  const category = await getCategory(params.categoryId);
  const products = await getProducts({
    categoryId: category.id,
    colorId: searchParams.color,
    sizeId: searchParams.size,
  });

  return (
    <div className="container space-y-6">
      <Billboard data={category.billboard} />
      <div className="border-b py-2">
        <Suspense fallback={<FiltersLoading />}>
          <Filters />
        </Suspense>
      </div>
      <ProductsList title={category.name} items={products} />
    </div>
  );
};
export default Page;

const Filters = async () => {
  const sizes = await getSizes();
  const colors = await getColors();
  return (
    <div className="flex items-center gap-x-4">
      <Filter name="Colors" data={colors} valueKey="color" />
      <Filter name="Sizes" data={sizes} valueKey="size" />
    </div>
  );
};

const FiltersLoading = () => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="h-8 w-[100px] animate-pulse rounded-[2px] bg-slate-300"></div>
      <div className="h-8 w-[100px] animate-pulse rounded-[2px] bg-slate-300"></div>
    </div>
  );
};
