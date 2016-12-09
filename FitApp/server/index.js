let koa = require('koa');
let staticServe = require('koa-static');
let bodyParser = require('koa-bodyparser');
let config = require('./config');

let app = koa();

app.use(staticServe(config.staticPath));

app.use(bodyParser());

app.listen(config.port);
console.log(`Listening on port ${config.port}`);
