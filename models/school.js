
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    edviron_id: {
      type: String,
    },

    student_count: {
	  type: Number,
	},

	fee_collection_date: {
	  type: Number,
	},

	late_fee_grace_period: {
	  type: Number,
	},

	late_fee: {
	  type: Number,
	},

	address: {
	  type: Object,
	},

	bank_details: {
	  type: Object,
	},

	date_of_establishment: {
	  type: Date,
	},

	email_id: {
	  type: String,
	},

	legal_details: {
	  type: Object,
	},

	logo_url: {
	  type: String,
	},

	name: {
	  type: String,
	},

	phone_number: {
	  type: String,
	},

	school_type: {
	  type: String,
	},

	convenience_fee: {
	  type: Number,
	},

	convenience_fee_frequency: {
	  type: String,
	},

	fee_frequency: {
	  type: String,
	},
  },
  { timestamps: true }
);

const School = mongoose.model("School", schoolSchema);

module.exports = School;
