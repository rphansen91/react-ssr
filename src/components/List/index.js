import React from 'react';

export default source => ({ loading, error, data }) => (
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