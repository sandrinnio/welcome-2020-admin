import apolloClient from '../apollo';
import { gql } from '@apollo/react-hooks';

const dataProvider = {
  getList: async (params) => {
    const { data } = await apolloClient.query({
      query: gql`
        query getUsers {
          getUsers {
            id
            fullName
            email
            idNumber
            phone
            verified
          }
        }
      `,
      fetchPolicy: 'network-only',
      // variables: {
      //   record: {
      //     limit: params.pagination.perPage,
      //     skip: params.pagination.page
      //   }
      // }
    });
    return { data: data.getUsers, total: data.getUsers.length };
  },
  getOne: async (params) => {
    const { data } = await apolloClient.query({
      query: gql`
        query getUser($record: GetUserDTO!) {
          getUser(record: $record) {
            id
            fullName
            email
            idNumber
            phone
            verified
          }
        }
      `,
      variables: {
        record: {
          id: params.id
        }
      }
    })

    return { data: data.getUser }
  }
}

export default dataProvider;
