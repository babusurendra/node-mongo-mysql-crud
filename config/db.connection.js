const mongoose = require('mongoose');
// var conn = mongoose.createConnection('mongodb://localhost/employee,mongodb://localhost/users',{
//     useMongoClient: true,
//     connectTimeoutMS: 1000
//   });

mongoose.connect('mongodb://localhost:27017/employee');
mongoose.connect('mongodb://localhost:27017/users');
//var employeedb = mongoose.connection;
mongoose.connection.on('open',()=>{
   console.log("Database connected");
});
mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
  
  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 
  require('../models/employee.model');
  require('../models/user.model');