const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const internship = new Schema({
	companyname: {
		type: String,
		required: true
	},
	jobtitle: {
		type: String,
		default: false
	},
	jobdesc : {
		type: String,
		default : false
	},
	recruter :{
		type: String,
		default :false
	}
});

const Internship = mongoose.model("internship", internship);

module.exports =Internship;