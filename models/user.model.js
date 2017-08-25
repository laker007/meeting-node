var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    OpenID: String,
    UserName: String,
    CompanyID: String,
    DepartmentID: String,
    TeamID: String,
})

module.exports = mongoose.model('User', UserSchema);