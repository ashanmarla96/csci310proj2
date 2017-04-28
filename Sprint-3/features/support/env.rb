require 'capybara/cucumber'

Capybara.default_driver = :selenium

PAGES =	{
			"search page" => "localhost:3000",
			"word cloud page" => "localhost:3000/wordcloud/halfond",
			"paper list page" => "localhost:3000/paperlist/the/halfond",
			"abstract page" => "http://localhost:3000/abstractpage/the/halfond/citation.cfm%3Fid%3D1186074%26CFID%3D929560790%26CFTOKEN%3D11722653",
			"conference page" => "localhost:3000/conference"

		}
