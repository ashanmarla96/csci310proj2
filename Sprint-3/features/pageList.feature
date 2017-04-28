Feature: Paper List Page
	In order to inspect the paper that contain a chosen word
	As a user
	I need to be able to see and interact with the page list

Scenario: Page List and Title
	Given I am on the paper list page
	Then I should see the paper list
	And the chosen word should be shown on the page



Scenario: Navigating to paper Page
	Given I am on the paper list page
	When I click a paper title
	Then I should be on the abstract page

Scenario: Correctness of Navigation
	Given I am on the paper list page
	When I click a paper title
	Then I should be on the abstract page
	And the contents should match the paper I clicked

Scenario: Down load link
 Given I am on the paper list page
 When I click a link
 Then I should down load the PDF

Scenario: New World Cloud
 Given I am on the paper list page
 When I select radio buttons
 And click generate new cloud button
 Then I should be on the word cloud page
