const polka = require('polka');
const send = require('@polka/send-type');
const { json } = require('body-parser');

polka()
  .use(json())
  .get('/', (req, res) => {
    send(res, 200, {
      talk: "Hello from polka"
    });
  })
  .post('/', (req, res) => {
    console.log(req.body);
    res.end();
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });
