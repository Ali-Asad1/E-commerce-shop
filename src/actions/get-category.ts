import { notFound } from "next/navigation";

import { CategoryType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<CategoryType> => {
  const response = await fetch(`${URL}/${id}`, { next: { revalidate: 10 } });
  if (response.status === 404) notFound();
  return response.json();
};
