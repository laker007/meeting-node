var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeeingSchema = new Schema({
    topic: String, // 会议主题
    start: Date, //开始时间
    end: Date, // 结束时间
    host: String, //主持人，预约人
    contact: Number, //联系方式
    participants: Array, //参会人员
});

module.exports = mongoose.model('Meeting', MeeingSchema);