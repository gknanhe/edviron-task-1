const express = require('express');
const router = express.Router();

router.use('/transactions', require('./transactions'));
router.use('/disbursement', require('./disbursement'));

module.exports = router;