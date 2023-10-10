const Transaction = require('../models/transaction');

module.exports.getAll = async function (req, res) {
	const transactions = await Transaction.find({});
  	res.status(200).json(transactions);
};

module.exports.getOne = async function (req, res) {
	const transaction = await Transaction.findById(req.params.id);
  	res.status(200).json(transaction);
};

module.exports.reconcile = async function (req, res) {
	const transaction = await Transaction.findById(req.params.id);
	const { status } = req.body;
	if(transaction.status === 'PENDING') {
		transaction.status = status;
		transaction.save();
		res.status(200).json(transaction);
	}
	else {
		res.status(400).json({message: 'Transaction is not PENDING'});
	}
};