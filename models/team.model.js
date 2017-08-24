var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    DepartmentID: String,
    TeamName: String,
});

module.exports = mongoose.model('Team', TeamSchema);