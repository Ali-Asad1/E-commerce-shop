import { Store } from "@/types";

const URL = process.env.NEXT_PUBLIC_API_URL;
export const getStore = async (): Promise<Store> => {
  const response = await fetch(URL as string, { next: { revalidate: 900 } });
  return response.json();
};
