/**
 * MainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  respondJson(req, res) {
    res.send({
      talk: "Hello from sails"
    })
  },
  logBody(req, res) {
    console.log(req.body);
    res.sendStatus(200);
  }
};
