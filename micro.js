const micro = require("micro");

const server = micro(async (req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      return [
        {
          action: "talk",
          text: "Hello from micro"
        }
      ];
    } else {
      const body = await micro.json(req);
      console.log(body);
      micro.send(res, 200);
    }
  }
});

server.listen(3000, () => console.log("Micro listening on port 3000!"));
