Feature: User interfaces
	In order to use the WordCloud application
	As a user
	I need to see the user interface

Scenario: Search Page UI
	Given I am on the search page
	Then I should see the search bar
	And I should see the search_button
	And I should see the search history

Scenario: Word Cloud Page UI
	Given I am on the word cloud page
	And I should see the word cloud
	And the word cloud title should be the same as html title
	And I should see the searchBar2
	And I should see the searchButton2
	And I should see the keyword as title
	And I should see the downloadwordCloud Button

Scenario: Paper List Page UI
	Given I am on the page list page
	Then I should see the word as title
	And I should see the paper list
	And the page list title should be the same as html title
	And I should see the PDF button
	And I should see the BibTex button
	And I should see the pdfButton button
	And I should see the Text button
	And I should see the backtoCloud button
	And I should see the subsetRadio button

Scenario: Abstract Page UI
	Given I am on the abstract page
	Then I should see the paper title
	And I should see the conference name
	And I should see the author list
	And the paper title should be the same as html title
	And I should see the pdf button
	And I should see the backtoList button
	And I should see the backtoCloud button
	And I should see the word hilighted

Scenario: Conference Page UI
	Given I am on the conference page
	Then I should see the paper list
