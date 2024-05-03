import qs from "query-string";

import { ProductType } from "@/types";

interface QueryType {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProducts = async (query: QueryType): Promise<ProductType[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url, { next: { revalidate: 0 } });
  return response.json();
};
