var express = require('express');
var router = express.Router();
var https = require('https');

var User = require('../models/user.model');

// Todo AppID and AppSecret 应该放置在配置文件中
var AppID = 'wx8af32e262b3f0544';
var AppSecret = 'e86f936bf32dc4a84a01d910a37338df';

router.post('/', function (req, res, next) {
    var js_code = req.body.js_code;
    var encryptedData = req.body.encryptedData;
    var iv = req.body.iv;
    var exchange; // 从微信服务器上交换回来的 openid 和 session_key
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
                exchange = JSON.parse(buf.toString());

                User.findOne({
                    OpenID: exchange.openid,
                }, function (err, user) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(user);

                    if (user) {
                        // 此用户已经注册，可进行预约
                        result = {
                            'register': true,
                            'openid': exchange.openid,
                        };
                    } else {
                        // 此用户尚未注册，让用户进行注册操作
                        result = {
                            'register': false,
                            'openid': exchange.openid,
                        };
                    }

                    _res.json(result);
                })
            })
            .on('end', function () {
                // Todo: exchange 不应该传到前端去
                // console.log(exchange);
                // _res.json(exchange);
            })
    });
});

module.exports = router;