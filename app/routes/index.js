const express = require('express');
const router = express.Router();
const ping = require('../controllers/ping');

router.get('/ping', ping.healthCheck);

module.exports = router;
