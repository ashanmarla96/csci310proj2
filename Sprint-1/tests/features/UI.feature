Feature: User interfaces
	In order to use the WordCloud application
	As a user
	I need to see the user interface

Scenario: Search Page UI
	Given I am on the search page
	Then I should see the search bar
	And I should see the Search button
	And I should see the search history

Scenario: Word Cloud Page UI
	Given I am on the word cloud page
	And I should see the word cloud
	And the word cloud title should be the same as html title

Scenario: Paper List Page UI
	Given I am on the page list page
	Then PDF should be in the html
	And I should see the word as title
	And I should see the paper list
	And the page list title should be the same as html title
	And I should see the down load link
	And I should see the generate new cloud button
	And I should see the radio button

Scenario: Abstract Page UI
	Given I am on the abstract page
	Then I should see the paper title
	And I should see the conference name
	And I should see the author list
	And the paper title should be the same as html title
	And I should see the down load PDF button

	Scenario: Conference Page UI
	Given I am on the conference page
	Then I should see the paper list
