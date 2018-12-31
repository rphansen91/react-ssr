import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SSRDataProvider, createSSRDataClient } from 'data-hoc';
import * as serviceWorker from './serviceWorker';
import './index.css';

const initial = window.__SSR_DATA__ || {};
const client = createSSRDataClient(initial);

ReactDOM.render(
    <SSRDataProvider value={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SSRDataProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
