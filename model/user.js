var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    email:String,
    password:String,
    role:{type:String,enum:["admin","user"],default:"user"}
})
var usermodel = mongoose.model("user",userSchema);
module.exports = usermodel;