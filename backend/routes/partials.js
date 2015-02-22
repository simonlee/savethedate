var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  console.log(name);
  res.render('partials/' + name);
});

module.exports = router;
