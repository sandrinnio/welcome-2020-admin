import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DateField,
  EmailField,
  BooleanField
} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullName" />
      <EmailField source="email" />
      <TextField source="idNumber" />
      <TextField source="phone" />
      <DateField source="created_at" />
      <BooleanField source="verified" />
      <EditButton />
    </Datagrid>
  </List>
)