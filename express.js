const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send([
    {
      action: "talk",
      text: "Hello from express"
    }
  ])
);

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(200);
});

app.listen(3000, () => console.log("Express listening on port 3000!"));
