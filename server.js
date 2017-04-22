const fs = require('fs');
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackCompiler = webpack(require('./webpack.config.js'));
const port = 8080;

app.use(require('webpack-dev-middleware')(webpackCompiler, {
  noInfo: true,
  publicPath: `http://localhost:${port}/dist`
}));

app.use(require('webpack-hot-middleware')(webpackCompiler));

const loadTodos = () => JSON.parse(fs.readFileSync('./db.json', 'utf8'));

app.get('/api/todos', (req, res) => {
  setTimeout(() => {
    res.json(loadTodos());
  }, 3000);
});

app.use(express.static('.'));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is listening at http://localhost:${port}`);
});
