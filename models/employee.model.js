const mongoose = require('mongoose');
let schema = mongoose.Schema;
employee = new schema({
    name: String,
    eid: Number,
    designation: String,
    jobDescription: String
});
module.exports = mongoose.model('edata', employee);