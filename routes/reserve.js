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

    // 按照预定人来查找会议记录
    if (req.query.OpenID) {
        Meeting.find({
            OpenID: req.query.OpenID,
        }, function (err, meetings) {
            if (err) throw err;

            res.json(meetings)
        })
    }

    // 按照会议室来查找会议记录
    if (req.query.MeetingRoom) {
        Meeting.find({
            MeetingRoom: req.query.MeetingRoom,
        }, function (err, meetings) {
            if (err) throw err;

            res.json(meetings)
        })
    }

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
    meeting.Host = req.body.Host;
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