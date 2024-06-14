import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";

export type Receipt = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  items?: Array<Item>;
  total: number | null;
  updatedAt: Date;
};
