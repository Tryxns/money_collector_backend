var express = require('express');
var router = express.Router();

const  { 
  getReport
} = require('../controllers/controller_report')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/report', getReport);
module.exports = router;
