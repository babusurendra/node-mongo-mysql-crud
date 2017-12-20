var express = require('express');
var userController = require('../controllers/user.controller');
var router = express.Router();
try{
    router.get('/',userController.list);
}
catch(error){
    console.log(`Error in User Router: ${error}`);
}
module.exports = router;