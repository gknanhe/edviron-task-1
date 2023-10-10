const express = require('express');
const router = express.Router();

const disbursementController = require('../controllers/disbursementController');

router.get('/', disbursementController.getAllDisbursement);
router.post('/', disbursementController.createDisbursement);

module.exports = router;