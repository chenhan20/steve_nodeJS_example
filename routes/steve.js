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

//test bootstrap modal功能
router.get('/test_modal',function(req,res,next){
  res.render('./main/training/test_modal');
});
//test bootstrap tab(分頁)功能
router.get('/bootstrap_tab_test',function(req,res,next){
  res.render('./main/training/bootstrap_tab_test');
});
//胸(chest) 功能
router.get('/chest',function(req,res,next){
  res.render('./main/training/chest');
});



//後臺設定頁面
router.get('/admin_index',function(req,res,next){
  res.render('./main/admin/admin_index');
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
