var express = require('express');
var router = express.Router();
var https = require('https');

var AppID = 'wx8af32e262b3f0544';
var AppSecret = 'e86f936bf32dc4a84a01d910a37338df';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
})

router.post('/', function (req, res, next) {
  var js_code = req.body.js_code;
  var encryptedData = req.body.encryptedData;
  var iv = req.body.iv;
  var result;
  var _res = res;

  console.log(js_code)
  console.log(encryptedData);
  console.log(iv);

  console.log(AppID);
  console.log(AppSecret);

  var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + AppID + '&secret=' + AppSecret + '&js_code=' + js_code + '&grant_type=authorization_code'
  console.log(url);
  //get 请求外网  
  https.get(url, function (res) {

    res.on('data', function (data) {
        const buf = Buffer.from(data);
        // 包含 session_key expires_in openid
        result = JSON.parse(buf.toString());
      })
      .on('end', function () {
        // Todo: result 不应该传到前端去
        _res.json(result);
      })
  });
});

module.exports = router;