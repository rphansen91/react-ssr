import React from 'react';
import AsyncHOC from '../hocs/Async';

export const fetchJediQuery = (i) => fetch(`https://swapi.co/api/people/${i}/?schema=json`).then((res) => res.json());

export const fetchFilmQuery = (i) => fetch(`https://swapi.co/api/films/${i}/?schema=json`).then((res) => res.json());

export const FetchJedis = ({ params = {}, children }) => (
    <AsyncHOC
        name="FetchJedis"
        params={params}
        query={(ids) => Promise.all(ids.map(fetchJediQuery))}
    >
        {children}
    </AsyncHOC>
);

export const FetchFilms = ({ params = {}, children }) => (
    <AsyncHOC
        name="FetchFilms"
        params={params}
        query={(ids) => Promise.all(ids.map(fetchFilmQuery))}
    >
        {children}
    </AsyncHOC>
);