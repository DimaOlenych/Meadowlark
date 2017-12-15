var express = require('express');
var app = express();

// handlebars
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// home page
app.get('/', function(req, res) {
    res.render('home');
});

// about page
app.get('/about', function(req, res) {
    res.render('about');
});

// page 404
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

// page 500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express запущен на http://localhost:' +
        app.get('port') + '; нажмите Ctrl+C для завершения.');
});