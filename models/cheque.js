
const mongoose = require("mongoose");

const chequeSchema = new mongoose.Schema(
  {
	school: {
	  type: mongoose.Schema.Types.ObjectId,
	  ref: "School",
	},
	status: {
	  type: String,
	},
	cheque_number: {
	  type: String,
	},
  },
  { timestamps: true }
);

const Cheque = mongoose.model("Cheque", chequeSchema);

module.exports = Cheque;
