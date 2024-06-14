import { Receipt } from "../receipt/Receipt";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  receipts?: Array<Receipt>;
  updatedAt: Date;
};
