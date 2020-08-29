import React from 'react';
import {
  Edit,
  SimpleForm,
  EmailField,
  BooleanInput
} from 'react-admin';

const UserTitle = ({ record }) => {
  return <span>User {record ? record.fullName : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <EmailField source="email" />
      <BooleanInput source="paid" />
    </SimpleForm>
  </Edit>
)