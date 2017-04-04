Feature: Search Button
	In order to perform the search
	As a user
	I need to be able to click on the search button and perform correct actions

Scenario: Normal Search
	Given I am on the search page
	When I fill the searchBar with author
	And I click Search button
	Then I should be on the word cloud page

Scenario: Invalid Search
	Given I am on the search page
	When I fill the searchBar with nonsense
	And I click Search button
	Then an error message should be displayed
