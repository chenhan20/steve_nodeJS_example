var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('./main/login', { exction: '' });
});

//直接輸入index進入此頁的話會走這邊
router.get('/index', function(req, res, next) {
  res.render('./main/index', { 
  title: 'Example',
  secoend: 'react_example',
  Accounts: '訪客'
  });
});


//使用post的只有經過post才會經此段，固一定是有從登入那邊來，所以可在此判斷用戶資格
router.post('/index', function(req, res, next) {
  var accounts = req.body.username;
  if(accounts=='123'){
  res.render('./main/index', { 
    title: 'Example',
    secoend: '登入成功',
    Accounts: accounts
  });
}else{
  res.render('./main/login', { 
    exction: '查無此用戶，請重新登入',
  });
}});


router.get('*',function(req,res){
  res.render('./main/error', { URL: req.originalUrl });
});





module.exports = router;
