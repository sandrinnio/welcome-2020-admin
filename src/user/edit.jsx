import React from 'react';
import {
  Edit,
  SimpleForm,
  EmailField,
  BooleanInput
} from 'react-admin';

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <EmailField source="email" />
      <BooleanInput source="verified" />
    </SimpleForm>
  </Edit>
)