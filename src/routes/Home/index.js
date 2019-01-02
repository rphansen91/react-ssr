import React, { Component } from 'react';
import { FetchTodos, FetchUsers } from '../../data/todos';
import UserDisplay from '../../components/UserDisplay';
import Footer from '../../components/Footer';
import groupBy from 'lodash/groupBy';
import uniq from 'lodash/uniq';
import Page from '../Page';
import map from 'lodash/map';

class Home extends Component {
  render() {
    return (
        <Page 
            header={<h1>Todos</h1>}
            footer={<Footer />}
        >
        <FetchTodos>
          {({ data: todos }) =>
              <FetchUsers ids={uniq(map(todos, ({ userId }) => userId))}>
                {({ data: users }) => {
                    const userTodos = groupBy(todos, "userId")
                    return map(users, (user) =>
                        <UserDisplay
                            key={user.id}
                            user={user}
                            todos={userTodos[user.id]} 
                        />
                    );
                }}
              </FetchUsers>
          }
        </FetchTodos>
      </Page>
    );
  }
}

export default Home;
