module.exports = {

    connect: function( io,PORT){
    
        io.on('connection',(socket) => {
          console.log('user connection on port '+ PORT + ' : '+ socket.id);
    
          socket.on('newmsg',(message)=>{
            io.emit('newmsg', message);
          })
            
          socket.on('disconnect',()=>{
            io.emit("disconnect1");
          });
        });
    }
}