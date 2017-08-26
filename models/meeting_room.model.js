var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeetingRoomSchema = new Schema({
    CompanyID: String,
    MeetingRoomName :String,
})

module.exports = mongoose.model('MeetingRoom', MeetingRoomSchema);