import { SizeType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<SizeType[]> => {
  const response = await fetch(URL, { next: { revalidate: 10 } });
  return response.json();
};
