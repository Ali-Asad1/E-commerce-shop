export type BillboardType = {
  id: string;
  label: string;
  imageUrl: string;
};

export type CategoryType = {
  id: string;
  name: string;
  billboard: BillboardType;
};

export type StoreType = {
  id: string;
  name: string;
  userId: string;
};

export type ProductType = {
  id: string;
  name: string;
  price: number;
  isFeatured: boolean;
  category: CategoryType;
  size: SizeType;
  images: ImageType[];
  color: ColorType;
};

export type ImageType = {
  id: string;
  url: string;
};

export type ColorType = {
  id: string;
  name: string;
  value: string;
};
export type SizeType = {
  id: string;
  name: string;
  value: string;
};
