var express = require('express');
var exp = express();

exp.set('view engine', 'ejs');

exp.get('/', function (req, res){
  res.render('index');
});

exp.get('/news', function (req, res) {
  res.render('news');
});

exp.listen(3333);
console.log('Its ok!');
