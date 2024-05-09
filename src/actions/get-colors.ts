import { ColorType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<ColorType[]> => {
  const response = await fetch(URL, { next: { revalidate: 10 } });
  console.log(response.status);
  return response.json();
};
