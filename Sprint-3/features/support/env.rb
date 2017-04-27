require 'capybara/cucumber'

Capybara.default_driver = :selenium

PAGES =	{
			"search page" => "localhost:3000",
			"word cloud page" => "localhost:3000/wordcloud/halfond",
			"paper list page" => "localhost:3000/wordsearch/paperlist/word",
			"abstract page" => "localhost:3000/wordcloud/abstractpage/paperid",
			"conference page" => "localhost:3000/conference"

		}
