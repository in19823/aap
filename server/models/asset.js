const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const asset = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: false},
	length: {type: Number, required: true},
	url: {type: String, required: true}
}, {timestamp: true});

module.exports = mongoose.model('Asset', asset);