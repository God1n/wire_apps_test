/// <reference types="nativewind/types" />

export type Product = {
  id: string;
  SKU: string;
  name: string;
  brandName: string | null;
  mainImage: string;
  price: {
    amount: string;
    currency: string;
  };
  sizes: string[];
  stockStatus: string;
  colour: string;
  description: string;
};
