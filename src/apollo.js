import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const uri = 'http://localhost:5000/graphql'

const uploadLink = createUploadLink({
  uri,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const authLink = setContext((_, { headers, ...rest }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadLinkWithAuth = authLink.concat(uploadLink);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log('TCL: errorLink -> message', message);

      console.log(
        `[GraphQL error]: Message: ${JSON.stringify(message)}, Location: ${JSON.stringify(
          locations,
        )}, Path: ${path}`,
      );
    });

  if (networkError) {
    console.log('[Network error]:', networkError);
  }
});

const cache = new InMemoryCache({
  dataIdFromObject: (o) => o.uid,
});

export default new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, uploadLinkWithAuth]),
  connectToDevTools: true,
});
