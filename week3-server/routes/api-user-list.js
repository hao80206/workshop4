/*  
    Author: Allan Browning 
    Subject: 3813ICT
    Route: retirve list of users.
*/
module.exports = {
 route:async (app)=>{
    const User = require('../user-class.js');
    const users = JSON.parse(await require('../user-list.js').readJsonAsString('data.json'));
   
    console.log(users);
    
   
    //Route to manage user logins
     app.get('/api/users',function(req,res){
      
      let userlist = [];
        for (let i=0;i<users.length;i++){
         let user = new User(users[i].id,users[i].username,users[i].email,users[i].avatar,'',false);
         userlist.push(user);  
        }
         res.send(JSON.stringify(userlist)); 
       });
 }
}  
       
       
    