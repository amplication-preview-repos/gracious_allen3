import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutReceiptsInput } from "./ItemCreateNestedManyWithoutReceiptsInput";

export type ReceiptCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  items?: ItemCreateNestedManyWithoutReceiptsInput;
  total?: number | null;
};
