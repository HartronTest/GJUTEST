var express=require('express');
var MongoClient=require('mongodb').MongoClient;
var qs=require('querystring');
var app=express();
var assert=require('assert');
var body='';
var no=1;
/*
app.use(express.static('public'));app.all('/',function(req,res){
		res.sendFile('index.html');
		res.end("done");
});*/
app.all('/',function(req,res){
req.on('data',function(chunk){
	body+=chunk;
});
req.on('end',function()
	{
		var data=qs.parse(body);
		MongoClient.connect('mongodb://localhost:27017/db1',function(err,db){
			assert.equal(null,err);
			console.log("Connected to database");
			ìnsertData(db,data.data,function(){
				db.close();
			})
		});
	});
});
app.all(function(req,res){
	res.end("Connected");
})
app.listen(3000,function(){
	console.log('server started successfuly.');
});


var insertData=function(db,data,callback){
	db.collection('items').insertOne({no:no,item: data},function(err,result){
		assert.equal(err);
		no=no+1;
		callback();
	});
};