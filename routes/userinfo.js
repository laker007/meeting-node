var express = require('express');
var router = express.Router();
var User = require('../models/user.model');

router.get('/', function (req, res, next) {
    var _user = new User();

    console.log(req.query.OpenID);
    User.findOne({
        OpenID: req.query.OpenID
    }, function (err, user) {
        console.log(user);

        // 查找公司
        User.findOne({
            CompanyID: user.CompanyID
        }, function (err, company) {
            _user.CompanyName = company.CompanyName;
        })
    })
})

module.exports = router;