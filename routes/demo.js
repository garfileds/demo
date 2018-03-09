const express = require('express')
const router = express.Router()

router
  .get('/', function (req, res) {
    res.render('index', { title: 'Express' })
  })
  .get('/vueNightSwitch', function(req, res) {
    res.render('vueNightSwitch', { layout: false })
  })

module.exports = router
