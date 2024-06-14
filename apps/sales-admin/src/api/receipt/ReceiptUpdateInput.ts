import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutReceiptsInput } from "./ItemUpdateManyWithoutReceiptsInput";

export type ReceiptUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  items?: ItemUpdateManyWithoutReceiptsInput;
  total?: number | null;
};
