var express = require('express');
var router = express.Router();
var Company = require('../models/company.model');
var Department = require('../models/department.model');
var Team = require('../models/team.model');
var User = require('../models/user.model');

// api/v1/register
router.post('/', function (req, res, next) {

    var user = new User();
    user.CompanyID = req.body.CompanyID;
    user.DepartmentID = req.body.DepartmentID;
    user.TeamID = req.body.TeamID;
    user.UserName = req.body.UserName;
    user.OpenID = req.body.OpenID;

    user.save(function (err) {
        if (err) throw err;

        res.json({
            message: 'user created!',
        })
    })

})

/**
 * 获取公司列表
 */
router.get('/company', function (req, res, next) {
    console.log('get company');
    Company.find(function (err, companys) {
        if (err) throw err;

        res.json(companys);
    })
})

/**
 * 新增公司
 */
router.post('/company', function (req, res, next) {
    var company = new Company();
    company.CompanyName = req.body.CompanyName;
    company.save(function (err) {
        if (err) throw err;

        res.json({
            message: 'company created!'
        });
    });
})


/**
 * 获取部门
 */
router.get('/department', function (req, res, next) {

    Department.find({
        CompanyID: req.query.CompanyID,
    }, function (err, departments) {
        if (err) throw err;
        res.json(departments)
    })
})

/**
 * 增加部门
 */
router.post('/department', function (req, res, next) {
    var department = new Department();
    department.CompanyID = req.body.CompanyID;
    department.DepartmentName = req.body.DepartmentName;

    department.save(function (err) {
        if (err) {
            console.log(err);
        }

        res.json({
            message: 'department created!'
        })
    })
})

/**
 * 获取团队
 */
router.get('/team', function (req, res, next) {
    Team.find({
        DepartmentID: req.query.DepartmentID,
    }, function (err, teams) {
        if (err) throw err;
        res.json(teams)
    })
})

/**
 * 新增团队
 */
router.post('/team', function (req, res, next) {
    var team = new Team();
    team.DepartmentID = req.body.DepartmentID;
    team.TeamName = req.body.TeamName;

    team.save(function (err) {
        if (err) throw err;

        res.json({
            message: 'team created!'
        })
    })
})

module.exports = router;