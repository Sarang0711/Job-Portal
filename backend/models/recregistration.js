const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recregistrationSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		default: true
	},
	name : {
		type: String,
		default : true
	},
	companyname : {
		type: String,
		default : true
	},
	roll : {
		type: String,
		default : false
	},
	email : {
		type: String,
		default : false
	}
});

const Recregistration = mongoose.model("RECRUTER", recregistrationSchema);

module.exports = Recregistration;