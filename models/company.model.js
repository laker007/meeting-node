var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
    CompanyName: String, // 公司名字

});

module.exports = mongoose.model('Company', CompanySchema);