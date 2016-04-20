"use strict";

const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
