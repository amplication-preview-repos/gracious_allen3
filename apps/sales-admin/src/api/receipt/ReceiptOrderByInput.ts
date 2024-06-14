import { SortOrder } from "../../util/SortOrder";

export type ReceiptOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
