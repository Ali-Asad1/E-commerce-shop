export type Billboard = {
  id: string;
  name: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Store = {
  id: string;
  name: string;
  userId: string;
};
