import { notFound } from "next/navigation";

import { ProductType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<ProductType> => {
  const response = await fetch(`${URL}/${id}`);
  if (response.status === 404) notFound();
  return response.json();
};
