import { Product } from "./product";

export type Order = {
  id: number;
  products: {
    product: Product;
    quantity: number;
  }[];
  status: String;
};