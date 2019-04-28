const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();
app.use(koaBody())

app.use(async ctx => {
  if (ctx.request.path === "/") {
    if (ctx.request.method === "GET") {
      ctx.body = {
        talk: "Hello from Koa"
      };
    } else {
      console.log(ctx.request.body)
      ctx.status = 200;
    }
  }
});

app.listen(3000);
