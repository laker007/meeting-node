var express = require('express');
var router = express.Router();
var Company = require('../models/company.model');
var Department = require('../models/department.model');
var Team = require('../models/team.model');

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
    console.log('get department');
    console.log(req.query.CompanyID);

    Department.find({
        CompanyID: req.query.CompanyID,
    }, function (err, departments) {
        if (err) {
            console.log(err)
        }
        res.json(departments)
    })
})

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

router.get('/team', function (req, res, next) {
    console.log('get department');
    console.log(req.query.DepartmentID);

    Team.find({
        // CompanyID: req.query.CompanyID,
        DepartmentID: req.query.DepartmentID,
    }, function (err, teams) {
        if (err) {
            console.log(err)
        }
        res.json(teams)
    })
})

router.post('/team', function (req, res, next) {
    var team = new Team();
    team.DepartmentID = req.body.DepartmentID;
    team.TeamName = req.body.TeamName;

    team.save(function (err) {
        if (err) {
            console.log(err);
        }

        res.json({
            message: 'team created!'
        })
    })
})

module.exports = router;