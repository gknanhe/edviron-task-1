const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transactionsController');

router.get('/', transactionsController.getAll);
router.get('/:id', transactionsController.getOne);
router.put('/:id/reconcile', transactionsController.reconcile);

module.exports = router;