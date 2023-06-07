let app =require('express')();
let http = require('http').Server(app);
let path = require('path');
var io = require('socket.io')(http);



app.get('/', function(req, res){
    // res.send({ message: "hello world!" });
    res.sendFile(path.join(__dirname, 'index.html'));

});

io.on('connection', function(socket){
    console.log('A user has connected')

    socket.on('disconnect', function(){
        console.log('A user disconnected');

    });
});

http.listen(3000, function(){
    console.log("Listening on *:3000");
});