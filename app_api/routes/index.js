'use strict';
const express = require('express');
const router = express.Router();
const sass2scss = require('../controllers/sassController');
const scss2sass = require('../controllers/scssController');

router.post('/sass2scss', sass2scss);
router.post('/scss2sass', scss2sass);

module.exports = router;
