import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  receiptId?: SortOrder;
  updatedAt?: SortOrder;
};
