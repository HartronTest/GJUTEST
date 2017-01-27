var http = require("http"),
    port = 1337;

var server = http.createServer(function(request,response){

    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Hello HTTP!");
    response.end();

 var query = 'bob j';
Users.aggregate([ //pipeline array
 {$project:{name: { $concat : [ "$firstName", " ", "$lastName" ] }}}, //stage1
 {$match : { name: { $regex: query, $options:'i'}}} //stage2
])
});

server.listen(port);
console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);