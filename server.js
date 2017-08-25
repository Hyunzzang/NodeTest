var express = require('express');
var app = express();
var router = require('./router/main')(app);
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(cookieParser);

//if ('development' == app.get('env')) {
//    app.use(express.errorHandler());
//}

var server = app.listen(8000, function () {
    console.log("Express server has started on port 8000");
    console.log("\u001b[31m", 'Test.');
    console.log("\u001b[32m", 'Test.');
    console.log("\u001b[33m", 'Test.');
    console.log("\u001b[34m", 'Test.');
    console.log("\u001b[35m", 'Test.');
    console.log('\u001b[0m');
});

server.on('request', function () {
    console.log("Request On.");
});

server.on('connection', function () {
    console.log("Connection On.");
});

server.on('close', function () {
    console.log("Close On.");
});

/**
 * socket.io
 */
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function (client) {
    console.log("socket.io - connection.");

    client.on('event', function (data) { 
        console.log("socket.io - event.");
    });
    client.on('disconnect', function () { 
        console.log("socket.io - disconnect.");
    });
});
server.listen(3000);