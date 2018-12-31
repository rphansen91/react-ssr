import React from 'react';

export default source => ({ loading, error, data }) => (
    loading
    ? <p>Loading...</p>
    : error
    ? <p>{error}</p>
    : data && data.length
    ? (
        <ul className="list-group mb-4">
            {data.map((item, i) => <li className="list-group-item" key={i}>{item[source]}</li>)}
        </ul>
    )
    : <div>No results</div>
)