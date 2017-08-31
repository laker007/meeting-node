var express = require('express');
var router = express.Router();
var MeetingRoom = require('../models/meeting_room.model');
var User = require('../models/user.model');
var Meeting = require('../models/meeting.model');

/**
 * 获取预定记录
 */
router.get('/', function (req, res, next) {
    console.log(req.query);

    Meeting.find({
        OpenID: req.query.OpenID,
    }, function (err, meetings) {
        if (err) throw err;

        // 将会议室名字传到前端，在数据库设计时，未把会议室名称同时记录在会议预定记录中。
        res.json(meetings)
    })
})

/**
 * 新增会议记录
 */
router.post('/', function (req, res, next) {
    console.log(req.body);
    var meeting = new Meeting();
    meeting.OpenID = req.body.OpenID;
    meeting.Topic = req.body.Topic;
    meeting.MeetingRoom = req.body.MeetingRoom;
    meeting.MeetingRoomName = req.body.MeetingRoomName;
    meeting.Date = req.body.Date;
    meeting.BeginTime = req.body.BeginTime;
    meeting.EndTime = req.body.EndTime;
    meeting.Contact = req.body.Contact;

    meeting.save(function (err) {
        if (err) {
            console.log(err);
        }

        res.json({
            message: 'meeting created!',
        })
    })
})

/**
 * 删除预定记录
 */
router.delete('/', function (req, res, next) {
    console.log(req.body);
    Meeting.remove({
        _id: req.body.MeetingID,
    }, function (err) {
        if (err) {
            console.log(err)
        }
        res.json({
            message: 'meeting delete success',
        })
    })

})

module.exports = router;