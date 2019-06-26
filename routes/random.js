const Picker = require('wariai');

const express = require('express');
const router = express.Router();

router.post('/weighted', function(req, res, next) {
  let picker  = new Picker(req.body.options);
  res.send(JSON.stringify(picker.pickOneWithWeight()));
});

router.post('/list', function(req, res, next) {
    let picker  = new Picker(req.body.options);
    res.send(JSON.stringify(picker.getRandomizedList()));
});

module.exports = router;
