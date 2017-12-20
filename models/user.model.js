const mongoose = require('mongoose');
let schema = mongoose.Schema;
let user = new schema({
    name:String,
    uid:Number
});
module.exports = mongoose.model('udata',user);