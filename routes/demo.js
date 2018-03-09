const express = require('express')
const router = express.Router()

router
  .get('/vueNightSwitch', function(req, res) {
    res.render('vueNightSwitch', { layout: false });
  })

module.exports = router
