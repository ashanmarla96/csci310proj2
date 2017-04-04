var request = require('request');
var async = require('async')
var _ = require('lodash')
var bodyParser = require('body-parser')
var cheerio = require('cheerio')

var express = require('express'),
    http = require('http'),
    path = require('path'),

    // require php-express and config
    phpExpress = require('php-express')({
        binPath: '/usr/bin/php' // php bin path.
    });


// init express
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
    extended: true
}));  // body parser is required!!


// set view engine to php-express
app.set('views', path.join(__dirname, 'views'));
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.use(express.static(path.join(__dirname, 'public')));

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

app.get('/', function(req,res) {
    res.render('index')
})

app.get('/wordcloud/', function(req,res) {
    res.status(404).send('404 Page Not Found'); 
})

app.get('/wordcloud/:keyword', function(req,res) {
    var keyword = req.params.keyword;
    if (keyword.length > 10) {
        res.status(500).send('500 Bad Input/Keyword not found')
    }
    request.get( {
        url: 'http://dl.acm.org/results.cfm',
        qs {
            query: keyword,
            Go.x: 0,
            Go.y: 0
        }
    }, function (err, response, body) {
        if (err){
            return res.status(500).send('ERROR')
        }
        var page = cheerio.load(body);
        var urls = page('#results .details .title a').map(a => a.attr('href'));
        if (urls[0] == null) {
            res.render('wordcloud' {get: {result: 'Fail'}});
        }
        else {
            res.render('wordcloud' {get: {result: 'Success'}});
        }

    })
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

