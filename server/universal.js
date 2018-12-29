import path from 'path';
import fs from 'fs';
import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import DataProvider, { dataClient } from '../src/dataprovider';
import App from '../src/App';
import manifest from "../build/asset-manifest.json"

const filePath = path.resolve(__dirname, '../build/index.html');
const cssPath = path.resolve(__dirname, `../build/${manifest["main.css"]}`);
const htmlData = fs.readFileSync(filePath, 'utf8');
const cssData = fs.readFileSync(cssPath, 'utf8');
const prepHTML = (data, { html, head, body, state }) => {
  return data.replace('<html lang="en">', `<html ${html}>`)
  .replace('<head>', '<head>' + head)
  .replace('</head>', `<style>${cssData}</style></head>`)
  .replace('</head>', `<script>window.__SSR_DATA__=${JSON.stringify(state).replace(/</g, '\\u003c')}</script></head>`)
  .replace(/<div id="root">.*<\/div>/, `<div id="root">${body}</div>`)
};

const universalLoader = (req, res) => {
  console.log(req.originalUrl);

  const context = {}
  const client = dataClient({}, { ssr: true });
  const ServerApp = () => (
    <DataProvider value={client}>
      <StaticRouter location={ req.url } context={context}>
        <App />
      </StaticRouter>
    </DataProvider>
  );

  renderToString(<ServerApp />);
  
  client.isReady()
  .then(() => {
    const body = renderToString(<ServerApp />);
    const helmet = Helmet.renderStatic();
    const state = client.extract();
    const html = prepHTML(htmlData, {
      state,
      html: helmet.htmlAttributes.toString(),
      head:
        helmet.title.toString() +
        helmet.meta.toString() +
        helmet.link.toString(),
      body
    });

    res.send(html);
  })
  .catch(e => {
    console.log(e);
    res.send(htmlData);
  });

};

export default universalLoader;
