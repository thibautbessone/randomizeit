const Picker = require('wariai');

const express = require('express');
const router = express.Router();

router.post('/weighted', function(req, res, next) {
  console.log((req.body.options));
  let picker  = new Picker(req.body.options);
  res.send(JSON.stringify(picker.pickOneWithWeight()));
});


process.on('uncaughtException', function (exception) {
  console.log(exception); // to see your exception details in the console
  // if you are on production, maybe you can send the exception details to your
  // email as well ?
});
module.exports = router;
