var mongoose = require('mongoose');

var schema = {
	name: String,
	price: Number,
	category: String,
	image: String,
	brewery: String,
	alcohol: Number	
}

var Products = mongoose.model("Products", schema);

module.exports = Products;