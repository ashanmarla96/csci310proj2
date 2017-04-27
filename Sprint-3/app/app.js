var request = require('request');
var async = require('async')
var _ = require('lodash')
var bodyParser = require('body-parser')
var cheerio = require('cheerio')
var text = require('pdf-stream').text;
var Horseman = require('node-horseman');
global.XMLHttpRequest = require('xhr2');
global.DOMParser = require('xmldom').DOMParser

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

var stopWords= ['a','about','am','an','and','any','are','arent',
            'as','at','be','been','both','but','by','cant','cannot','could','couldnt',
            'did','didnt','do','does','doesnt','doing','dont','each','few','for','from',
            'had','hadnt','has','hasnt','havent','having','hed','hes','here','heres','hers',
            'herself','himself','how','hows','i','id','ill','im','ive','if','in','is','isnt',
            'it','its','itself','lets','more','most','mustnt','my','myself','nor','of','on',
            'or','ought','shant','shed','shouldnt','so','some','such','than','that','thats',
            'their','theirs','them','themselves','then','there','theres','these','theyd',
            'theyll','theyre','theyve','this','through','to','too','up','was','wasnt','wed',
            'well','weve','werent','what','whats','whens','wheres','which','while','who',
            'whos','whom','whys','with','yourself','yourselves']

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

app.get('/test', function(req, res) {
    res.render('test');
});

app.get('/', function(req,res) {
    res.render('index')
});

app.get('/wordcloud/', function(req,res) {
    res.status(404).send('404 Page Not Found'); 
});

app.get('/wordcloud/:keyword', (req,res) => {
    var keyword = req.params.keyword;
    if (keyword.length > 50) {
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
        urls = urls.slice(0,3);
        
        async.map(urls, (url, iAmDone) => {
            var freqMap = new Map();
            var pdf = 'http://dl.acm.org/' + url;
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
                        if (word.length != 1 && stopWords.indexOf(word) < 0) {
                            if (freqMap.has(word)) {
                                freqMap.set(word, freqMap.get(word)+1);
                            } 
                            else {
                                freqMap.set(word, 1);
                            }
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
    var keyword = req.params.keyword;
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
        var urls = $('#results .details .title a').map((index, a) => $(a).attr('href'));
        var pdflinks = $('#results > .details > .ft > a').map((index, a) => $(a).attr('href'));
        var titleString = Array.prototype.join.call(titles.slice(0,5));
        var urlString = Array.prototype.join.call(urls.slice(0,5));
        var pdfString = Array.prototype.join.call(pdflinks.slice(0,5));
        res.render('paperlist', {get: {titles: titleString, urls: urlString, word: word, keyword: keyword, pdfs: pdfString}});

    });
});

app.get('/abstractpage/:word/:keyword/:url', (req, res) => {
    var word = req.params.word;
    var keyword = req.params.keyword;
    var url = decodeURIComponent(req.params.url);

    request.get( {
        url: 'http://dl.acm.org/' + url
    }, (err, response, body) => {
        if (err) {
            res.status(500).send('ERROR');
        }
        var $ = cheerio.load(body);
        var title = $('#divmain > div > h1 > strong').text().trim();
        var authors = $('#divmain > table:nth-child(2) > tr > td:nth-child(1) > table:nth-child(2) > tr > td:nth-child(2) > a')
            .map((index, a) => $(a).text().trim());
        var authorString = Array.prototype.join.call(authors.slice(0,5));
        var horseman = new Horseman({timeout: 10000});
        horseman
            .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
            .open('http://dl.acm.org/citation.cfm?id=1101935&CFID=929144694&CFTOKEN=87293293')
            .waitForSelector('#abstract > div > div')
            .text('#abstract > div > div')
            .then((abstract) => {

                const match = new RegExp(sanitize(word), 'ig');
                abstract = abstract.replace(match,  '<span style="background-color:yellow">$&</span>');
                console.log(abstract);
                res.render('abstractpage', {get: {word: word, keyword: keyword, abstract: abstract, title: title, authors: authorString}})
            })
            .close();
        });
    })

function sanitize(val) {
  return val.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

