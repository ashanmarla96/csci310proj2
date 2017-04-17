var request = require('request');
var expect = require('chai').expect;
var app = require('../app/app.js')

describe('Searching for Author/Keyword', function() {
	describe ('Null Input', function() {
		it ('Returns 404 Page Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/wordcloud/'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(404);
				done();
			});
		});
	});

	describe ('Bad Input', function() {
		it ('Returns 500 Internal Server Error/Input Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/wordcloud/asd;flkjasdf'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(500);
				done();
			});
		});
	});

	describe ('Good Input', function() {
		it ('Does not return 404 Page Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/wordcloud/Weston'
			}, (err, res, body) => {
				expect(res.statusCode).to.not.equal(404);
				done();
			});
		});

		it ('Does not return 500 Artist Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/wordcloud/Weston'
			}, (err, res, body) => {
				expect(res.statusCode).to.not.equal(500);
				done();
			});
		});

		it ('Does not return undefined response', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/wordcloud/Weston'
			}, (err, res, body) => {
				expect(body).to.exist;
				done();
			});
		});				
	});
});
describe ('Paper List', function() {
	describe ('Undefined input', function () {
		it ('Returns 404 Page Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/paperlist/'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(404);
				done();
			});
		});		
	});
	describe('List Generated from Word', function () {
		describe ('Word Bad Input', function () {
			it ('Returns 500 Internal Server Error/Papers Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/lk;jh'
				}, (err, res, body) => {
					expect(res.statusCode).to.equal(500);
					done();
				});
			});
		});
		describe ('Good Input', function() {
			it ('Does not return 404 Page Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/the'
				}, (err, res, body) => {
					expect(res.statusCode).to.not.equal(404);
					done();
				});
			});

			it ('Does not return 500 Artist Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/the'
				}, (err, res, body) => {
					expect(res.statusCode).to.not.equal(404);
					done();
				});
			});

			it ('Does not return undefined response', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/the'
				}, (err, res, body) => {
					expect(body).to.exist;
					done();
				});
			});				
		});
	});
	describe('List Generated from Conference', function() {
		describe ('The conferenceID is undefined', function () {
			it ('Returns 404 Page Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/conference'
				}, (err, res, body) => {
					expect(res.statusCode).to.equal(404);
					done();
				});
			});		
		});
		describe ('ConferenceID Bad Input', function () {
			it ('Returns 500 Internal Server Error/Papers Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/conference/lk;jh'
				}, (err, res, body) => {
					expect(res.statusCode).to.equal(500);
					done();
				});
			});
		});
		describe ('Good Input', function() {
			it ('Does not return 404 Page Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/conference/conferenceID'
				}, (err, res, body) => {
					expect(res.statusCode).to.not.equal(404);
					done();
				});
			});

			it ('Does not return 500 Artist Not Found', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/conference/conferenceID'
				}, (err, res, body) => {
					expect(res.statusCode).to.not.equal(404);
					done();
				});
			});

			it ('Does not return undefined response', function(done) {
				request ({
					method: 'GET',
					url: 'http://localhost:3000/paperlist/conference/conferenceID'
				}, (err, res, body) => {
					expect(body).to.exist;
					done();
				});
			});				
		});
	});
});
describe('Abstract Page', function() {
	describe ('Word and Paper ID are undefined', function () {
		it ('Returns 404 Page Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(404);
				done();
			});
		});		
	});
	describe ('Word is undefined', function () {
		it ('Returns 404 Page Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/paperID'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(404);
				done();
			});
		});		
	});
	describe ('Word Bad Input', function () {
		it ('Returns 500 Internal Server Error/Artist Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/paperID/lk;jh'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(500);
				done();
			});
		});
	});
	describe ('PaperID Bad Input', function () {
		it ('Returns 500 Internal Server Error/Artist Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/lk;jh/the'
			}, (err, res, body) => {
				expect(res.statusCode).to.equal(500);
				done();
			});
		});
	});
	describe ('Good Input', function() {
		it ('Does not return 404 Page Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/paperID/the'
			}, (err, res, body) => {
				expect(res.statusCode).to.not.equal(404);
				done();
			});
		});

		it ('Does not return 500 Artist Not Found', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/paperID/the'
			}, (err, res, body) => {
				expect(res.statusCode).to.not.equal(500);
				done();
			});
		});

		it ('Does not return undefined response', function(done) {
			request ({
				method: 'GET',
				url: 'http://localhost:3000/abstractpage/paperID/the'
			}, (err, res, body) => {
				expect(body).to.exist;
				done();
			});
		});				
	});
});