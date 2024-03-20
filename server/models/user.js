const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	tsc_id: { type: [String], required: true },
	balance: { type: Number, required: true }
});

// userSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "7d",
// 	});
// 	return token;
// };


// const validate = (data) => {
	// 	const schema = Joi.object({
		// 		firstName: Joi.string().required().label("First Name"),
		// 		lastName: Joi.string().required().label("Last Name"),
		// 		email: Joi.string().email().required().label("Email"),
		// 		password: passwordComplexity().required().label("Password"),
		// 	});
		// 	return schema.validate(data);
		// };
		
const User = mongoose.model("user", userSchema);
module.exports = { User };
