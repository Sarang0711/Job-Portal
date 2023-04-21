const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobs = new Schema({
	ly: {
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
	}
});

const Jobs = mongoose.model("Jobs", jobs);

module.exports =Jobs;