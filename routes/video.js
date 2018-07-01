const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('video', { layout: false });
});

router.get('/chimee', function(req, res) {
  res.render('video_chimee', { layout: false });
});

module.exports = router;
