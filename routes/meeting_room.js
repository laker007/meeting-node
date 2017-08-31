var express = require('express');
var router = express.Router();
var MeetingRoom = require('../models/meeting_room.model');
var User = require('../models/user.model');

/**
 * 获取会议室
 */
router.get('/', function (req, res, next) {
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
router.post('/', function (req, res, next) {
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