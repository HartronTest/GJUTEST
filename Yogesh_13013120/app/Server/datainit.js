var mongoose = require('mongoose'),
	dbname = "angular_mongodb";

var Product = mongoose.model("Product", {
		name: String,
		price: Number,
		category: String,
		image: String,
		brewery: String,
		alcohol: Number
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts();
	});
}

function insertProducts(){

	Product.create(
		{
			name: "Old Rasputin1",
			price: 40,
			category: "Russian Imperial Stout",
			image: "old_rasputin.jpg",
			brewery: "North Coast Brewing",
			alcohol: 9
		},
		{
			name: "Old Rasputin2",
			price: 40,
			category: "Russian Imperial Stout",
			image: "old_rasputin.jpg",
			brewery: "North Coast Brewing",
			alcohol: 9
		},
		{
			name: "Old Rasputin3",
			price: 40,
			category: "Russian Imperial Stout",
			image: "old_rasputin.jpg",
			brewery: "North Coast Brewing",
			alcohol: 9
		}

	);

	/*var products = new Product({
		name: "Old Rasputin",
		price: 40,
		category: "Russian Imperial Stout",
		image: "old_rasputin.jpg",
		brewery: "North Coast Brewing",
		alcohol: 9	
	});	

	products.save(function(err){
		if(err) console.log(err);
	});*/

}