var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
    CompanyID: String, // mongodb 自动生成
    DepartmentName: String, // 部门名字
})

module.exports = mongoose.model('Department', DepartmentSchema);