const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },
    status: {
      type: String,
    },
    amount: {
      type: Number,
    },
    payment_mode: {
      type: String,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
