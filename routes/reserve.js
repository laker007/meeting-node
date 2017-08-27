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
        if (err) {
            console.log(err)
        }

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

/**
 * 获取会议室
 */
router.get('/meeting_room', function (req, res, next) {
    console.log(req.query.OpenID);

    User.findOne({
        OpenID: req.query.OpenID
    }, function (err, user) {
        MeetingRoom.find({
            CompanyID: user.CompanyID
        }, function (err, meeting_rooms) {
            res.json(meeting_rooms)
        })
    })
})

/**
 * 新增会议室
 */
router.post('/meeting_room', function (req, res, next) {
    var meeting_room = new MeetingRoom();

    meeting_room.CompanyID = req.body.CompanyID;
    meeting_room.MeetingRoomName = req.body.MeetingRoomName;

    meeting_room.save(function (err) {
        if (err) {
            console.log(err);
        }

        res.json({
            message: 'meeting_room created!',
        })
    })
})

module.exports = router;