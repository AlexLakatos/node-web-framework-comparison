const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("koa-router")();

const app = new Koa();
app.use(koaBody());

router.get("/", ctx => {
  ctx.body = [
    {
      action: "talk",
      text: "Hello from koa-router"
    }
  ];
});
router.post("/", ctx => {
  console.log(ctx.request.body);
  ctx.status = 200;
});

app.use(router.routes()).listen(3000, () => console.log("Koa-router listening on port 3000!"));
