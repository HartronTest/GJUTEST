var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

//Make a connection to MongoDB
mongoose.connect('MongoDB://localhost/matlabMeanDemo');
var io = require('socket.io')(app.listen(3000));

//Defining the root directory for static files
app.use(express.static(__dirname + '/app'));

//serving the static HTML
app.get("/", function (req, res) {
    res.sendfile("/index.html");
});

var appData;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    var dataSchema;

    dataSchema = mongoose.Schema({
        clock: Array,
        hours: Number,
        minutes: Number,
        seconds: Number
    });
    appData = mongoose.model('appData', dataSchema);

    //Sending and receiving data
    io.on('connection', function (socket) {
        fs.watch('data', function (event, filename) {
            fs.readFile('data/' + filename, function (err, data) {
                if (!err) {
                    try {
                        var x = JSON.parse(data);
                        socket.emit('updated', x);

                        // Create a new instance of appData model
                        // i.e also known as a document
                        var savingData = new appData({
                            clock: x.clock,
                            hours: x.hours,
                            minutes: x.minutes,
                            seconds: x.seconds
                        });
                        //save data
                        savingData.save();
                    } catch (e) {
                        console.log('malformed data');
                    }
                }
            })
        });
    });
});