const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          talk: "Hello from vanilla"
        })
      );
    } else {
      let body = [];
      req.on("data", chunk => {
        body.push(chunk);
      });
      req.on("end", () => {
        console.log(JSON.parse(body));
      });
      res.writeHead(200);
      res.end();
    }
  }
});
server.listen(3000, () => console.log("Server is listening on port 3000"));
