import React, { createContext } from "react";

const { Provider, Consumer } = createContext({});

export const withDataClient = Cmp => props => (
    <Consumer>
        {(client) => <Cmp {...props} client={client} />}
    </Consumer>
);

export const dataClient = (data = {}) => {
    let res, active = new Set();
    const isReadyPromise = new Promise((_res) => res = _res);
    const tokenize = (name="", params) => name.toString().replace(/\n/g, "") + JSON.stringify(params);
    return ({
        makeRequest: (name, fn, params) => {
            const token = tokenize(name, params);
            const request = fn(params);
            active.add(request);
            request.then((v) => {
                data[token] = v;
                active.delete(request);
                if (!active.size) res(data);
            });
            return request;
        },
        getCached: (name, params) => {
            const token = tokenize(name, params);
            return data[token];
        },
        extract: () => data,
        isReady: () => {
            if (!active.size) res(data);
            return isReadyPromise;
        }
    });
};

export default Provider;