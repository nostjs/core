const mongoose = require("mongoose");
const models = require("./models");
const props = require("node-passer");

module.exports = new Promise((resolve, reject) => {
	mongoose.connect("mongodb://localhost:27017/myapp", {
		useNewUrlParser: true
	}).then(() => {
		resolve(props({ models: models }));
	}, (err) => {
		reject(err);
	});
});