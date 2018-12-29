require('ignore-styles');
require('isomorphic-fetch');

require('@babel/register')({
    ignore: ['node_modules'],
    plugins: ['@babel/plugin-proposal-class-properties'],
    presets: ['@babel/env', '@babel/react']
});

require('./server');