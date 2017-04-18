var _ = require('lodash');

/*
const text = require('pdf-stream').text;
global.XMLHttpRequest = require('xhr2');

var pdf = 'http://dl.acm.org/ft_gateway.cfm?id=1101935&ftid=338180&dwn=1&CFID=750173384&CFTOKEN=52898354'
var stream = text(pdf);
var string = '';
stream.on('data', (part) => {
	var asdf = part.toString('utf-8');
	string += asdf;
})
stream.on('end',function(){
 console.log('final output');
 var asdf2 = string.split(" ");
 console.log(asdf2[0] + asdf2[1] + asdf2[2] + asdf2[3]);
});
*/

var users = {'asdf': 3, 'bbb': 4};
users = JSON.stringify(users);
console.log(users);
var result = JSON.parse(users);
console.log(result);
result = _.orderBy(_.keys(result),key => result[key], 'desc');
console.log(result);
