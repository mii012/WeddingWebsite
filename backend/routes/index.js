var express = require("express");
var router = express.Router();

let guestsController = require("../controllers/guestsController");

router
  .route("/")

  .post((req, res, next) => {
    let response = guestsController.createGuest(req);
    res.status(response.status).json(response.data);
  });

module.exports = router;
