import { ReceiptWhereUniqueInput } from "../receipt/ReceiptWhereUniqueInput";

export type ItemCreateInput = {
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  receipt?: ReceiptWhereUniqueInput | null;
};
