
const express = require('express');  
const http= require('http');
const {Server} = require("socket.io");
const cors = require('cors');
const app = express(); 
app.use(cors());

require('dotenv').config()
const PORT = process.env.PORT || 3000 

const server = http.createServer(app);//create a reference to the http server to attach to sockets.

const io = new Server(server,{
    cors:{
        origin:'*',
        methods:['GET','POST'],
    }
});

app.use (express.json()); 

require('./socket.js').connect(io,PORT);

require('./routes/api-login.js').route(app);
require('./routes/api-user-list.js').route(app);
require('./routes/api-update-user-list.js').route(app);

require('./listen.js').listen(server,PORT);
