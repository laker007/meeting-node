var express = require('express');
var router = express.Router();
var User = require('../models/user.model');
var Company = require('../models/company.model');
var Department = require('../models/department.model');
var Team = require('../models/team.model');

router.get('/', function (req, res, next) {
    var _user = {
        OpenID: null,
        CompanyName: null,
        DepartmentName: null,
        TeamName: null,
    };

    User.findOne({
        OpenID: req.query.OpenID
    }, function (err, user) {
        if (err) throw err;

        _user.OpenID = req.query.OpenID;
        // 查找公司
        Company.findOne({
            _id: user.CompanyID
        }, function (err, company) {
            _user.CompanyName = company.CompanyName;
            // 查找部门
            Department.findOne({
                _id: user.DepartmentID
            }, function (err, department) {
                _user.DepartmentName = department.DepartmentName;
                // 查找团队
                Team.findOne({
                    _id: user.TeamID
                }, function (err, team) {
                    _user.TeamName = team.TeamName;
                    res.json(_user);
                })
            })
        })
    })
})

module.exports = router;