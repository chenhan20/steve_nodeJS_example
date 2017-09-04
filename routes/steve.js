var express = require('express');
var router = express.Router();
var app=express();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('./main/login', { title: 'login' });
});

router.get('/login_post', function(req, res, next) {
  res.sendfile('./main/login_post');
 // res.render('./main/login_post', { title: 'login_post' });
});

router.get('/login_GET', function(req, res, next) {
  res.render('./main/login_GET', { title: 'GET' });
});

app.get('/steve/login_GET_TEST', function(req, res) {
    console.log("============login_GET===============");
    var username=req.query.username;
    var password=req.query.password;
    console.log(username);
    console.log(password);
    res.send(username + '謝謝你的回覆');

});

router.get('/index', function(req, res, next) {
  res.render('./main/index', { title: 'index' });

});



router.get('*',function(req,res){
  res.send('無此url!');
});





module.exports = router;
