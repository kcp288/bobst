var express = require('express');
var router = express.Router();

/* Single GET request that serves printer data */
router.get('/', function(req, res, next) {
  // var printerData = get printer data here
  res.render('bobst', { layout:'bobst.hbs', title: "Where Can I Print In Bobst?"});
});
module.exports = router;
