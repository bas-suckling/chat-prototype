let app = require('./server');
let http = require('http').createServer(app);
let io = require('socket.io')(http)
const port = process.env.PORT || 3001

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
      console.log('message: ' + JSON.stringify(msg))
      io.emit('chat message', msg)
    })
})

http.listen(port, function(){
  console.log('listening on : ', port);
});