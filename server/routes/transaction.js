const router = require("express").Router();
const { Transaction } = require("../models/transaction");

router.post("/", async (req, res) => {
	try {
		await new Transaction({ ...req.body }).save();
		res.status(201).send({ message: "Transaction created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
