const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('video', { layout: false });
});

module.exports = router;
