const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_name:{type: String, required:true},
    password:{type: String, required:true},
    Name:{type: String,require:true},
    role:{type: String,require:true},
},{timestamps:true,versionKey:false}
);

module.exports = mongoose.model('User', userSchema);