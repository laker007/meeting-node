var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeeingSchema = new Schema({
    Topic: String, // 会议主题
    Start: Date, //开始时间
    End: Date, // 结束时间
    Host: String, //主持人，预约人
    Contact: Number, //联系方式
    Participants: Array, //参会人员
});

module.exports = mongoose.model('Meeting', MeeingSchema);