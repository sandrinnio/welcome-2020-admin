import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import { ApolloProvider } from '@apollo/react-hooks';
import UserIcon from '@material-ui/icons/Group';

import * as serviceWorker from './serviceWorker';
import { USER } from './resources';
import { UserList } from './user';
import { dataProvider } from './dataProvider';
import apolloClient from './apollo';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Admin dataProvider={dataProvider}>
      <Resource name={USER} icon={UserIcon} list={UserList} />
    </Admin>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
