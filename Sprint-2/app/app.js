var request = require('request');
var async = require('async')
var _ = require('lodash')
var bodyParser = require('body-parser')
var cheerio = require('cheerio')
var text = require('pdf-stream').text;
global.XMLHttpRequest = require('xhr2');

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

//serving files
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'styles', 'main.css'));
});

/* istanbul ignore next */
app.get('/abstract.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'styles', 'abstract.css'));
});

/* istanbul ignore next */
app.get('/wordcloud2.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'node_modules', 'wordcloud', 'src',  'wordcloud2.js'));
});

/* istanbul ignore next */
app.get('/wordcloudpage.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'scripts', 'wordcloudpage.js'));
});

////////////////////////////////

app.get('/', function(req,res) {
    res.render('index')
})

app.get('/wordcloud/', function(req,res) {
    res.status(404).send('404 Page Not Found'); 
})

app.get('/wordcloud/:keyword', (req,res) => {
    var keyword = req.params.keyword;
    if (keyword.length > 10) {
        res.status(500).send('500 Bad Input/Keyword not found')
    }
    request.get( {
        url: 'http://dl.acm.org/results.cfm',
        qs: {
            query: keyword,
        }
    },  (err, response, body) => {
        if (err){
            return res.status(500).send('ERROR')
        }
        var $ = cheerio.load(body);
        var urls = $('#results .details .ft a').map((index, a) => $(a).attr('href').trim());
        urls = urls.slice(0,1);
        
        async.map(urls, (url, iAmDone) => {
            var freqMap = new Map();
            //var pdf = 'http://dl.acm.org/' + url;
            var pdf = 'http://www.pdf995.com/samples/pdf.pdf'
            var stream = text(pdf);
            var string = '';
            stream.on('data', (part) => {
                var asdf = part.toString('utf-8');
                string += asdf;
            })
            stream.on('end',() => {
                var wordArray = string.split(/[^a-zA-Z']/);
                for (var i = 0; i < wordArray.length; i++) {
                    if (wordArray[i] !== "") {
                        var word = wordArray[i].toLowerCase().replace(/'/g, "");
                        if (freqMap.has(word)) {
                            freqMap.set(word, freqMap.get(word)+1);
                        } 
                        else {
                            freqMap.set(word, 1);
                        }
                    }
                }
                iAmDone(null, freqMap); 
            });
        }, (err2, result2) => {
            if (err2) {
                return res.status(500).send('ERROR');
            }
            var mergeMap = new Map();
            for (var j = 0; j < result2.length; j++) {
                var map = result2[j];
                for (var word of map.keys()) {
                    if (mergeMap.has(word)) {
                        mergeMap.set(word, mergeMap.get(word) + map.get(word));
                    }
                    else {
                        mergeMap.set(word, map.get(word));
                    }
                }
            }
            var obj = Object.create(null);
            for ([k,v] of mergeMap) {
                obj[k] = v;
            }
            obj = JSON.stringify(obj);
            var result = JSON.parse(obj);
            result = _.orderBy(_.keys(result),key => result[key], 'desc');
            if (result.size > 250) {
                result = result.slice(0,250);
            }
            result = result.join()
            res.render('wordcloud', {get: {keyword: keyword, list: result}});

        });
    });
});

app.get('/paperlist/:word/:keyword', (req,res) => {
    var word = req.params.word;
    var keyword = req.params.keyword
    request.get( {
        url: 'http://dl.acm.org/results.cfm',
        qs: {
            query: word
        }
    }, (err, response, body) => {
        if (err) {
            res.status(500).send('ERROR');
        }
        var $ = cheerio.load(body);
        var titles = $('#results .details .title').map((index, title) => $(title).text().trim());
        var titleString = Array.prototype.join.call(titles.slice(0,5));
        res.render('paperlist', {get: {titles: titleString, word: word, keyword: keyword}});

    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

