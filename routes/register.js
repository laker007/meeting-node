var express = require('express');
var router = express.Router();
var Company = require('../models/company.model');
var Department = require('../models/department.model');
var User = require('../models/user.model');

// api/v1/register

/**
 * 获取公司列表
 */
router.get('/company', function (req, res, next) {
    console.log('get company');
    Company.find(function (err, companys) {
        if (err) {
            console.log(err);
        }

        res.json(companys);
    })
})

/**
 * 新增公司
 */
router.post('/company', function (req, res, next) {
    console.log('post company');
    var company = new Company();
    company.CompanyName = req.body.CompanyName;
    company.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'company created!'
        });
    });
})

router.get('/department', function (req, res, next) {

})

router.post('/department', function (req, res, next) {

})

module.exports = router;