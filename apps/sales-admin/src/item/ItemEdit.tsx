import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReceiptTitle } from "../receipt/ReceiptTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput source="receipt.id" reference="Receipt" label="Receipt">
          <SelectInput optionText={ReceiptTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
