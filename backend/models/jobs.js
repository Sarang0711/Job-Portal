const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobs = new Schema({
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

const Jobs = mongoose.model("jobs", jobs);

module.exports =Jobs;