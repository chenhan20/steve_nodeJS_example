var express = require('express');
var router = express.Router();

router.get('/example01', function(req, res, next) {
  res.render('./example/example01', { 
    title: 'Example',
    secoend: 'react_example',
  });
});

router.get('/example02', function(req, res, next) {
  res.render('./example/example02', { 
    title: 'Example',
  });
});
router.get('/example03', function(req, res, next) {
  res.render('./example/example03', { 
    title: 'Example03',
  });
});
router.get('/example04', function(req, res, next) {
  res.render('./example/example04', { 
    title: 'Example04',
  });
});
module.exports = router;