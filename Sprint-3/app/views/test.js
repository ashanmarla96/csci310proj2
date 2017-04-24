const text = require('pdf-stream').text;
global.XMLHttpRequest = require('xhr2');

var pdf = 'http://che.org.il/wp-content/uploads/2016/12/pdf-sample.pdf';
var stream = text(pdf);
var string = '';
console.log('hmmm');
stream.on('data', (part) => {
	var asdf = part.toString('utf-8');
	string += asdf;
})
stream.on('end',function(){
 console.log('final output');
 var asdf2 = string.split(" ");
 console.log(asdf2[0] + asdf2[1] + asdf2[2] + asdf2[3]);
});
