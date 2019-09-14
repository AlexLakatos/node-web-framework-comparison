var restify = require("restify");

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get("/", (req, res, next) => {
  res.send({
    talk: "Hello from restify"
  });
  next();
});

server.post("/", (req, res, next) => {
  console.log(req.body);
  res.send(200);
  next();
});

server.listen(3000, function() {
  console.log("%s listening at %s", server.name, server.url);
});
