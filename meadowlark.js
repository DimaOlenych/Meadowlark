var express = require('express');
var app = express();

// handlebars
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', handlebars);

app.set('port', process.env.PORT || 3000);

// home page
app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

// about page
app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('O Meadowlark Travel');
});

// page 404
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Не найдено');
});

// page 500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Ошибка сервера');
});

app.listen(app.get('port'), function() {
    console.log('Express запущен на http://localhost:' +
        app.get('port') + '; нажмите Ctrl+C для завершения.');
});