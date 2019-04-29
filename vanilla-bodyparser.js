const http = require('http');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const server = http.createServer((req, res, next) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        talk: "Hello from vanilla"
      }));
    } else {
      jsonParser(req, res, () => {
        console.log(req.body);
      });
      res.writeHead(200);
      res.end();
    }
  }
});
server.listen(3000, () => console.log("Server is listening on port 3000"));
