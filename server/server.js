import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import universalLoader from './universal';

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../build'), { index: false }));
app.use('*', universalLoader);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});