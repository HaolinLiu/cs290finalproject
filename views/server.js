/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Haolin Liu
 * Email: liuhaol@oregonstate.edu
 */

var path = require('path');
var express = require('express');

var twitData = require('./twitData');

var app = express();
var port = process.env.PORT || 3002;

var exphbs = require('express-handlebars');
app.engine('handlebars',exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/index.html', function (req, res, next) {
  res.status(200).render('twit', {
    twit: twitData
  });
});

app.get('/', function (req, res, next) {
  res.status(200).render('twit', {
    twit: twitData
  });
});

app.get('/twits/:number', function (req, res, next) {
  var number = req.params.number;
  if (twitData[number]) {
    res.status(200).render('twitn', twitData[number]);
  } else {
    next();
  }
});

app.get('/404.html', function (req, res, next) {
  res.status(404).render('404');
});

app.use(express.static('public'));

app.use('*', function (req, res) {
  res.status(404).render('404');
});


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});


//mongo --host classmongo.engr.oregonstate.edu --username cs290_liuhaol cs290_liuhaol --password
//db.getCollectionName()
//db.name.insertONe({

//})
//db.namp.find( ).pretty()
//db.name.updateOne()