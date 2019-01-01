import React, { Component } from 'react';
import { FetchFilms, FetchJedis } from '../../data/swars';
import { FetchTodos, FetchUsers } from '../../data/todos';
import { NumberInput } from '../../components/Input';
import UserDisplay from '../../components/UserDisplay';
import List from '../../components/List';
import groupBy from 'lodash/groupBy'
import uniq from 'lodash/uniq';
import map from 'lodash/map';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jedis</h1>
        <NumberInput value={1}>
          {(num) => (
            <FetchJedis params={[num]}>
                {List("name")}
            </FetchJedis>
          )}
        </NumberInput>
        <h1>Films</h1>
        <FetchFilms params={[1, 2, 3, 4, 5, 6, 7]}>
          {List("title")}
        </FetchFilms>
        <h1>Todos</h1>
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
      </div>
    );
  }
}

export default Home;
