import React, { Component } from 'react';
import AsyncHOC from './hocs/Async';
import './App.css';

const fetchTodosQuery = () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());
const fetchJediQuery = (i) => fetch(`https://swapi.co/api/people/${i}/?schema=json`).then((res) => res.json());
const fetchFilmQuery = (i) => fetch(`https://swapi.co/api/films/${i}/?schema=json`).then((res) => res.json());

const FetchTodos = ({ params = {}, children }) => (
  <AsyncHOC
      name="FetchTodos"
      params={params}
      query={fetchTodosQuery}
  >
      {children}
  </AsyncHOC>
);

const FetchJedis = ({ params = {}, children }) => (
  <AsyncHOC
      name="FetchJedis"
      params={params}
      query={(ids) => Promise.all(ids.map(fetchJediQuery))}
  >
      {children}
  </AsyncHOC>
);

const FetchFilms = ({ params = {}, children }) => (
  <AsyncHOC
      name="FetchFilms"
      params={params}
      query={(ids) => Promise.all(ids.map(fetchFilmQuery))}
  >
      {children}
  </AsyncHOC>
);

const List = source => ({ loading, error, data }) => (
  loading
  ? <h1>Loading</h1>
  : error
  ? <h1>{error}</h1>
  : data && data.length
  ? (
    <ul>
      {data.map((item, i) => <li key={i}>{item[source]}</li>)}
    </ul>
  )
  : <div>No results</div>
)

class NumberInput extends Component {
  state={
    num: 1
  }
  setNum (ev) {
    const num = Number(ev.target.value);
    if (num > 1) this.setState({ num });
  }
  render() {
    return (
      <div>
        <input type="number" value={this.state.num} onChange={(ev) => this.setState({ num: ev.target.value })} />
        {this.props.children(this.state.num)}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <NumberInput>
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

export default App;
