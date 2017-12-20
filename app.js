let app = require('express')();
require('./config/db.connection');
let bodyparser = require('body-parser');
let morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
require('./controllers/mysql/emp.controller');
// let usermodel = require('./models/user.model');
// let employeemodel = require('./models/employee.model');
// try{
//     var data = new usermodel({
//         name:"BB1",
//         eid:12345
//     });
//     usermodel.find(function (err, user) {
//         if(err){
//             console.log("error in saving");
//         }
//         console.log(`user data data is ${user}`);
//     });
// }
// catch(e){
//     console.log("error is "+e);
// }
// try{
//     // var data = new employeemodel({
//     //     name:"BB",
//     //     eid:1234
//     // });
//     employeemodel.find(function (err, emp) {
//         if(err){
//             console.log("error in saving");
//         }
//         console.log(`emp data is ${emp}`);
//     });
// }
// catch(e){
//     console.log("error is "+e);
// }
let empRoute = require('./routes/emp.route');
let userRoute = require('./routes/user.route');
let empmysqlroute = require('./routes/empmysql.route');
// app.get('/test',(req,res)=>{
//       console.log("default request");
//       res.send("default page");
// });
app.use('/api/emp',empRoute);
app.use('/api/user',userRoute);
app.use('/api/mysql/emp',empmysqlroute);
app.listen(3000,(error,success) => {
    if(error){
        console.log(`error while starting server`);
    }
    console.log(`Server started`);
});

