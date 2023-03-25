const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recregistrationSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		default: false
	},
	name : {
		type: String,
		default : false
	},
	companyname : {
		type: String,
		default : false
	},
	roll : {
		type: String,
		default : false
	},
});

const Recregistration = mongoose.model("Recregistration", recregistrationSchema);

module.exports = Recregistration;