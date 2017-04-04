require 'capybara/cucumber'

Capybara.default_driver = :selenium

PAGES =	{
			"search page" => "localhost:3000",
			"word cloud page" => "http://localhost:3000/wordcloud/author",
			"paper list page" => "http://localhost:3000/wordsearch/paperlist/word",
			"abstract page" => "http://localhost:3000/wordcloud/abstractpage/paperid",
			"conference page" => "http://localhost:3000/conference"

		}
