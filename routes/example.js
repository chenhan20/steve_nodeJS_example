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
    secoend: 'react_example',
  });
});

module.exports = router;