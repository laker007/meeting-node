var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
    CompanyID: String, // 公司名称
    DepartmentName: String, // 部门名字
})

module.exports = mongoose.model('Department', DepartmentSchema);