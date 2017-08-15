var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('./main/login', { title: 'login' });
});

router.get('/login_post', function(req, res, next) {
  res.render('./main/login_post', { title: 'login_post' });

});



module.exports = router;
