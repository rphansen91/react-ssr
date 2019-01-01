import React from 'react';
import { stringify } from 'query-string';
import { AsyncHOC } from 'data-hoc';

const apiKey = '1d3729f2-2a21-4a32-bb9c-08a7854255d3';
const defaultParams = {
    limit: 10,
    page: 0,
    order: 'DESC'
};

export const fetchCatsQuery = (params) =>
    fetch(`https://api.thecatapi.com/v1/images/search?${stringify(params)}`, {
        headers:  {
            'x-api-key': apiKey
        }
    })
    .then(r => {
        
        return r;
    })
    .then(r => r.json().then((result) => {
        r.headers.forEach((value, key) => {
            if (key === "pagination-count") {
                result.totalPages = value;
            }
        });
        return result;
    }));

export const FetchCats = ({ params = defaultParams, children }) => (
    <AsyncHOC
        name="FetchCats"
        params={params}
        query={(params) => fetchCatsQuery(params)}
    >
        {children}
    </AsyncHOC>
);