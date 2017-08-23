var express = require('express');
var router = express.Router();

// var User = require('../models/user');
// find user
/**
 *     User.find(function (err, users) {
      if (err) {
        res.send(err);
      }

      console.log(res.json(users))
    })

        var user = new User(); // create a new instance of the Bear model
    user.name = req.params.name; // set the bears name (comes from the request)

    user.save(function (err) {
      if (err)
        res.send(err);

      res.json({
        message: 'User created!'
      });
    });

        User.remove({
      _id: req.params.name
    }, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'Successfully deleted'
      });
    })
 */

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;