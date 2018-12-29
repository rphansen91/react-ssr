import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataProvider, { dataClient } from './dataprovider';
import * as serviceWorker from './serviceWorker';

const initial = window.__SSR_DATA__ || {};
const client = dataClient(initial);

ReactDOM.render(
    <DataProvider value={client}>
        <App />
    </DataProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
