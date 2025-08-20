/*  
    Author: Allan Browning 
    Subject: 3813ICT
    Route: Checks user credentials and reports .valid as true or false.
*/
module.exports = {
 route:async (app)=>{
    const User = require('../user-class.js');
    const users = JSON.parse(await require('../user-list.js').readJsonAsString('data.json'));
  
    const fs = require('fs');    
      console.log(users);
   
    //Route to manage user logins
     app.post('/api/updateusers',function(req,res){

       if (!req.body){
          //console.log('no post body');
          res.sendStatus(400);
        }
        console.log(req.body);
        
      // let userlist = [];
      //   for (let i=0;i<users.length;i++){
      //    let user = new User(users[i].id,users[i].username,users[i].email,users[i].avatar,'',false);
      //    userlist.push(user);  
      //   }
      const data = req.body;
      require('../user-list.js').appendJsonToFile('data.json', data)
      // await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
          res.send(true); 
       });
 }
}  


       
       
    