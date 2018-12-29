import React from 'react';
import { AsyncHOC } from 'data-hoc';

export const fetchTodosQuery = () => fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());

export const FetchTodos = ({ params = {}, children }) => (
    <AsyncHOC
        name="FetchTodos"
        params={params}
        query={fetchTodosQuery}
    >
        {children}
    </AsyncHOC>
);