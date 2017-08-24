var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Openid: String,
    Name: String,
    Company: String,
    Department: String,
    Team: String,
})

module.exports = mongoose.model('User', UserSchema);