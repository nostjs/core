const mongoose = require("mongoose");

module.exports = {
	User: mongoose.model("User", new mongoose.Schema({
		user: "string",
		pass: "string"
	})),
};