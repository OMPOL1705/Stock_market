const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	u_id: { type: String, required: true },
	cmp: { type: String, required: true },
	type: { type: Boolean, required: true },
	quantity : {type: Number, required: true},
	cprice: { type: Number, required: true },
    date : {type: String, required: true}
});

const Transaction = mongoose.model("transaction", transactionSchema);
module.exports = { Transaction };