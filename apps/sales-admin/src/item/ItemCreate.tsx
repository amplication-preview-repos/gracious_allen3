import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReceiptTitle } from "../receipt/ReceiptTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput source="receipt.id" reference="Receipt" label="Receipt">
          <SelectInput optionText={ReceiptTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
