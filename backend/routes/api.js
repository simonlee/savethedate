var express = require('express');
var router = express.Router();
//var validator = require('validator');
var spreadsheet = require('edit-google-spreadsheet');
var moment = require('moment');

/* GET on /address results in noop. */
router.get('/address', function(req, res, next) {
  res.send('no no');
});

// anything can post to this api. todo: fix
router.post('/address', function(req, res, next) {
  console.log(req.body);
  appendRow(req.body);
  res.end();
});

module.exports = router;

var spreadsheet = require('edit-google-spreadsheet');

var appendRow = function(rowData) {
  spreadsheet.load({
    spreadsheetId: process.env.SPREADSHEETID,
    worksheetId: process.env.WORKSHEETID,
    oauth: {
      email: process.env.EMAIL,
      keyFile: process.env.PEMKEY,
    },
  }, function sheetReady(err, sheet) {
    if (err) console.log(err);

    var rowIndex = 1;
    sheet.receive(function(err, rows, info) {
      if (err) throw err;

      rowIndex = parseInt(info.lastRow + 1, 10);

      var row = {};
      row[rowIndex] = {
        1: rowData.name,
        2: rowData.line1,
        3: rowData.line2,
        4: rowData.city,
        5: rowData.state,
        6: rowData.zip,
        7: moment().format()
      };

      sheet.add(row);

      sheet.send(function(err) {
        if (err) console.log(err);
      });
    });
  });
};
