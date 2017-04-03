Feature: Abstract paper
	In order to inspect the word usage of a paper in detail
	As a user
	I need to see the abstract of any paper of my choice

Scenario: Paper Title
	Given I am on the abstract page
	Then I should see the paper title

Scenario: Correct Conference name
 Given I am on the abstract page
 Then I should see the correct conference name

Scenario: Correct Author List
 Given I am on the abstract page
 Then I should see the correct author list

Scenario: Title and Word
	Given I am on the abstract page
	Then I should see the paper title
	And I should see the searched word

Scenario: Abstract paper contents
	Given I am on the abstract page
	Then I should see the paper contents

Scenario: Select author for new searched
  Given I am on the abstract page
	When I click an author
	Then I should be on the word cloud page

	Scenario: Select conference name
	  Given I am on the abstract page
		When I click the conference name
		Then I should be on the conference page
