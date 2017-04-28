Feature: Word Cloud
	In order to use the application's main purpose
	As a user
	I need to be able to see and interact with the word cloud


Scenario: Word Cloud display after search
	Given I am on the search page
	When I fill the searchBar with halfond
	And I click Search button
	Then I should be on the word cloud page
	And I should see the word cloud

Scenario: Status bar
 Given I am on the search page
 When I fill the searchBar with halfond
 And I click Search button
 Then I should see the status bar
