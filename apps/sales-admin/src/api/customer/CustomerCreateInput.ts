import { ReceiptCreateNestedManyWithoutCustomersInput } from "./ReceiptCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  receipts?: ReceiptCreateNestedManyWithoutCustomersInput;
};
