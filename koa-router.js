const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('koa-router')();

const app = new Koa();
app.use(koaBody())

router.get('/', (ctx) => {
  ctx.body = {
    talk: "Hello from Koa-router"
  };
});
router.post('/', (ctx) => {
  console.log(ctx.request.body)
  ctx.status = 200;
});

app.use(router.routes()).listen(3000);
