import React, { Component } from 'react';
import { FetchFilms, FetchJedis } from '../../data/swars';
import { FetchTodos } from '../../data/todos';
import { NumberInput } from '../../components/Input';
import List from '../../components/List';

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
          {List("title")}
        </FetchTodos>
      </div>
    );
  }
}

export default Home;
