var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

// NB: do 'npm install express'

app.set('port', 3001);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/webdev', function(req, res) {
  fs.readFile(path.join(__dirname, 'public', 'offer.json'), function(err, data) {
    res.json(JSON.parse(data));
  });
});

app.get('/company', function(req, res) {
  fs.readFile(path.join(__dirname, 'public', 'company.json'), function(err, data) {
    res.json(JSON.parse(data));
  })
});

app.listen(app.get('port'), function() {
  console.log('listening on localhost:3001');
});