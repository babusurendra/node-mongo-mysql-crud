let userModel = require('../models/user.model');
dbfuns = {
    list : (req,res)=>{
           userModel.find((error,users)=>{
               if(error){
                   res.status(500).json({
                       message : "Error while fetching users",
                       Error:error
                   });
               }
               res.json(users);
           });
    }
};
module.exports = dbfuns;