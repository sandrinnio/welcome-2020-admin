import { getUsersQuery } from '../../../lib/graphql/src';

import apolloClient from '../apollo';

const dataProvider = {
  getList: async (params) => {
    const { data } = await apolloClient.query({
      query: getUsersQuery,
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
}

export default dataProvider;
