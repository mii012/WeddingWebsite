var express = require('express');
var router = express.Router();
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let guestController = require('../controller/guestController');


router
  .route("/")

  .get((req, res, next) => {
    res.render('index', {title: "Hochzeit"})
  });

router //.fetch für post

  .route("/confirmed")

  .post(async (req, res, next) => {
    let response = await guestController.createGuest(req);
    res.render('confirmed')
  });

module.exports = router;