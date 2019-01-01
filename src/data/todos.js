import React from 'react';
import { AsyncHOC } from 'data-hoc';

export const fetchTodosQuery = () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());
export const fetchUserQuery = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());

export const FetchTodos = ({ params = {}, children }) => (
    <AsyncHOC
        name="FetchTodos"
        params={params}
        query={fetchTodosQuery}
    >
        {children}
    </AsyncHOC>
);

export const FetchUsers = ({ ids = {}, children }) => (
    <AsyncHOC
        name="FetchUsers"
        params={ids}
        query={(ids) => Promise.all(ids.map(fetchUserQuery))}
    >
        {children}
    </AsyncHOC>
);