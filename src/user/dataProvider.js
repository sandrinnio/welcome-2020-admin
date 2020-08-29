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
            paid
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
            paid
          }
        }
      `,
      fetchPolicy: 'network-only',
      variables: {
        record: {
          id: params.id
        }
      }
    })
    return { data: data.getUser }
  },
  update: async (params) => {
    const { data } = await apolloClient.mutate({
      mutation: gql`
        mutation verifyPayment($record: VerifyPaymentDTO!) {
          verifyPayment(record: $record) {
            id
            fullName
            email
            idNumber
            phone
            verified
            paid
          }
        }
      `,
      variables: {
        record: {
          id: params.id,
          paid: params.data.paid
        }
      }
    })
    return { data: data.verifyPayment }
  }
}

export default dataProvider;
