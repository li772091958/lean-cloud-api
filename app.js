'use strict'

const koaBody = require('koa-body')({ multipart: true })
let bodyParser = require('koa-bodyparser')()
var logger = require('koa-logger2');


let koa = require('koa');
let app = new koa();
let cors = require('koa2-cors');
let Router = require('koa-router');


app.use(cors())
app.use(koaBody);
app.use(bodyParser);
var log_middleware = logger('ip [day/month/year:time zone] method url protocol/httpVer size duration ms custom[unpacked]');
app.use(log_middleware.gen); // !! note there are no () after gen

let router = new Router({
  prefix: '/api'
})
require('./routes/route')(router)
app.use(router.routes())
    .use(router.allowedMethods())

let PORT = 12345
app.listen(PORT)
console.info('listen', PORT)
