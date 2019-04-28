const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => res.send({
  talk: "Hello from Express"
}))

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(200)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
