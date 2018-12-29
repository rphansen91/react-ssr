import React, { Component } from 'react';
import AsyncHOC from './hocs/Async';
import './App.css';

const fetchTodosQuery = () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json())
const fetchJediQuery = (i) => fetch(`https://swapi.co/api/people/${i}/?schema=json`).then((res) => res.json())
const fetchFilmQuery = (i) => fetch(`https://swapi.co/api/films/${i}/?schema=json`).then((res) => res.json())

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
      query={() => Promise.all([
        fetchJediQuery(1),
        fetchJediQuery(2),
        fetchJediQuery(3),
        fetchJediQuery(4),
      ])}
  >
      {children}
  </AsyncHOC>
)

const FetchFilms = ({ params = {}, children }) => (
  <AsyncHOC
      name="FetchFilms"
      params={params}
      query={() => Promise.all([
        fetchFilmQuery(1),
        fetchFilmQuery(2),
        fetchFilmQuery(3),
        fetchFilmQuery(4),
      ])}
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

class App extends Component {
  render() {
    return (
      <div>
        <FetchJedis>
          {List("name")}
        </FetchJedis>
        <FetchFilms>
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
