const Koa = require('koa');
// 处理json数据
const bodyParser = require('koa-bodyparser')

const errorHandler = require('./error-handle')
const useRoutes = require('../router')

const app = new Koa();

app.use(bodyParser())

useRoutes(app)

app.on('error',errorHandler)

module.exports = app