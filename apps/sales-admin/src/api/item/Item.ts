import { Receipt } from "../receipt/Receipt";

export type Item = {
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  receipt?: Receipt | null;
  updatedAt: Date;
};
