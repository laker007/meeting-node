var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    openid: String,
    name: String,
    company: String,
    department: String,
    team: String,
})

module.exports = mongoose.model('User', UserSchema);