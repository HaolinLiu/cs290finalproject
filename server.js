/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Haolin Liu
 * Email: liuhaol@oregonstate.edu
 */

var path = require('path');
var express = require('express');

var resturants = require('./resturants');

var app = express();
var port = process.env.PORT || 3003;

var exphbs = require('express-handlebars');
app.engine('handlebars',exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//var bodyParser = require('body-parser');
//var MongoClient = require('mongodb').MongoClient;



app.get('/index.html', function (req, res, next) {
  res.status(200).render('index');
});

app.get('/generator.html', function (req, res, next) {
  res.status(200).render('generator', {
    resturants: resturants
  });
});

app.get('/add.html', function (req, res, next) {
  res.status(200).render('add', {
  });
});

/*
app.post('/add/addname', function (req, res, next) {
  if (req.resturants && req.resturants.name) {
    var name = {
      name: req.resturants.name
    };
    var resturants = mongoDB.collection('resturants');
    resturants.updateOne(
      { $push: name },
      function (err, result) {
        if (err) {
          res.status(500).send("Error inserting name in DB.")
        } else {
          console.log("== mongo insert result:", result);
          if (result.matchedCount > 0) {
            res.status(200).end();
          } else {
            next();
          }
        }
      }
    );
  } else {
    res.status(400).send("Request needs a JSON body with caption and photoURL.")
  }
});
*/


app.get('/qnas.html', function (req, res, next) {
  res.status(200).render('qnas');
});

app.get('/about.html', function (req, res, next) {
  res.status(200).render('about');
});

app.get('/', function (req, res, next) {
  res.status(200).render('index');
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