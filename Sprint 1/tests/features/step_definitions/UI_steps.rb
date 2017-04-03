Given /I am on the (.*)/ do |page|
	visit PAGES[page]
end

# search page search bar, button and search history.
Then /I should see the search bar/ do
	expect(page).to have_xpath("//input[@id='searchBar' or @id='searchBar2']")
end

Then /I should see the (.*) button/ do |button|
	expect(page).to have_content(button)
end

Then /I should see the search history/ do
	expect(page).to have_xpath("//canvas[@id='history']")
end




# word cloud page wordcloud, and title
Then /I should see the word cloud/ do
	expect(page).to have_xpath("//canvas[@id='canvas']")
end

Then /the word cloud title should be the same as html title/ do
	expect(current_url).to include("###")
end



#papager list page, paper list title
Then /PDF should be in the html/ do
   expect(current_url).to have_content("PDF")
end

Then /I should see the word as title/ do
	 expect(page).to have_content("word")
end

Then /I should see the paper list/ do
	expect(page).to have_xpath("//ol[@id='paperList']")
end

Then /the paper list title should be the same as html title/ do
	expect(current_url).to include("paper list title")
end

Then /I should see the down load link/ do
	expect(page).to have_content("down load link")
end
Then /I should see the raido button/ do
	expect(page).to  have_xpath("//input[@id='radio button']")
end
# paper page
Then /I should see the paper title/ do
	expect(page).to have_content("paper title")
end
Then /I should see the conference name/ do
	expect(page).to have_content("conference name")
end
Then /I should see the author list/ do
	expect(page).to have_content("authors list")
end
Then /the paper title should be the same as html title/ do
	expect(current_url).to include("paper title")
end

# conference page
#Then /I should see the paper list/ do 
	#expect(page).to have_xpath("//ol[@id='paper list']")
#end


# buttons and navigate back and click button
When /I click (.*) button/ do |button|
	page.click_button(button)
end

Then /I should be on the (.*)/ do |backPage|
	expect(current_url).to eq(PAGES[backPage])
end
