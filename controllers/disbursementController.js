const School = require("../models/school");
const Transaction = require("../models/transaction");


module.exports.getAllDisbursement = async function (req, res) {
	const schools = await School.find({});
	const response = [];

	for (let school of schools) {
		const transactions = await Transaction.find({ school: school._id });
		response.push({
			school: school._id,
			transactions: transactions,
		});
	}
	res.status(200).json(response);
};

module.exports.createDisbursement = async function (req, res) {
	const { school, amount, payment_mode } = req.body;
	const transaction = await Transaction.create({
		school,
		amount,
		payment_mode,
		status: "PENDING",
	});

	res.status(200).json(transaction);
};
