import { ReceiptUpdateManyWithoutCustomersInput } from "./ReceiptUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  receipts?: ReceiptUpdateManyWithoutCustomersInput;
};
