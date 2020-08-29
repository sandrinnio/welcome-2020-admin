import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  BooleanField
} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="fullName" />
      <EmailField source="email" />
      <TextField source="idNumber" />
      <TextField source="phone" />
      <BooleanField source="verified" />
      <EditButton />
    </Datagrid>
  </List>
)