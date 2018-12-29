import React, { Component } from 'react';
import { FetchFilms, FetchJedis } from '../../data/swars';
import { FetchTodos } from '../../data/todos';
import { NumberInput } from '../../components/Input';
import List from '../../components/List';

class Home extends Component {
  render() {
    return (
      <div>
        <NumberInput value={1}>
          {num => (
            <FetchJedis params={[num]}>
              {List("name")}
            </FetchJedis>
          )}
        </NumberInput>
        <FetchFilms params={[1, 2, 3, 4, 5, 6, 7]}>
          {List("title")}
        </FetchFilms>
        <FetchTodos>
          {List("title")}
        </FetchTodos>
      </div>
    );
  }
}

export default Home;
