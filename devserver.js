const path = require('path');
const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('./webpack.config');

const app = new Express();
const port = 3000;

// app.use(Express.static('dist'))

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  // noInfo: true,
  publicPath: '/'
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('Server working on http://localhost:' + port);
});
