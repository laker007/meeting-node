var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeeingSchema = new Schema({
    OpenID: String, // 预定人
    Topic: String, // 会议主题
    MeetingRoom: String, // 会议室
    MeetingRoomName: String, // 会议室名称
    Date: String, // 预定年月日
    BeginTime: String, // 开始时间
    EndTime: String, // 结束时间
    Contact: Number, //联系方式
    Participants: Array, //参会人员
});

module.exports = mongoose.model('Meeting', MeeingSchema);