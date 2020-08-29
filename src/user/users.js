import * as React from "react"
import {
  List,
  Edit,
  SimpleForm,
  TextInput,
  Datagrid,
  TextField,
  EmailField,
  Filter,
  EditButton,
  DateField,
  BooleanInput,
  BooleanField
} from 'react-admin'

const UserFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
  </Filter>
)

export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
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

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <BooleanInput source="verified" />
    </SimpleForm>
  </Edit>
)
