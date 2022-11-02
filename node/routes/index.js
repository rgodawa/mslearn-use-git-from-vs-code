var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Express 2' });
=======
  res.render('index', { title: 'Git 3' });
>>>>>>> 2d7174c767241fcaf420332f277ec4d17223dd20
});

module.exports = router;
