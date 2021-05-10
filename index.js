var express = require('express');


//setting view engine for express to ejs
var app = express();
app.set('view engine', 'ejs');

//rendering home page
app.get('/', function(req, res) {

    res.render('html/index');
});

//rendering locations page
app.get('/locations', function(req, res) {
    res.render('html/locations');
});

app.get('/locations/carrefour-parklake', function(req, res) {
    res.render('html/carrefour-parklake');
});

app.get('/recipes', function(req, res) {
    res.render('html/recipes');
});


app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js_scripts', express.static('js_scripts'));


app.use(function(req, res, next) {
    res.status(404).send("ERROR 404. You are looking in the wrong place!")
});


app.listen(7777);
console.log('Port open at 7777.');