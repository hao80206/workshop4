/*  
    Author: Allan Browning 
    Subject: 3813ICT
    Route: Checks user credentials and reports .valid as true or false.
*/
module.exports = {
 route:async (app)=>{
    const User = require('../user-class.js');
    const users = JSON.parse(await require('../user-list.js').readJsonAsString('data.json')); // list of users
    const bcrypt = require('bcrypt');
    console.log('login', users[0])
    
    //Route to manage user logins
     app.post('/api/login',function(req,res){
         
        if (!req.body){
          //console.log('no post body');
          res.sendStatus(400);
        }
        let user = new User('','','','','',false);
        
        for (let i=0;i<users.length;i++){
         //Match email and compare bcrypt stored value with actual password.
          if (req.body.email == users[i].email && bcrypt.compareSync(req.body.pwd, users[i].pwd)){
            user.id = users[i].id;
            user.username = users[i].username;
            user.email =  users[i].email
            user.avatar = users[i].avatar;
            user.valid = true;
          }   
        }
         res.send(user); 
      });
 }
}  
       
       
    