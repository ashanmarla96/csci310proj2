Given /I am on the (.*)/ do |page|
	visit PAGES[page]
end

# search page search bar, button and search history.
Then /I should see the search bar/ do
	expect(page).to have_xpath("//input[@id='search_bar' or @id='searchBar2']")
end

Then /I should see the (.*) button/ do |button|
	expect(page).to have_content(button)
end

Then /I should see the search history/ do
	expect(page).to have_xpath("//canvas[@class='search_history']")
end




# word cloud page wordcloud, and title
Then /I should see the word cloud/ do
	expect(page).to have_xpath("//canvas[@id='canvas']")
end
Then /I should see the searchBar2/ do
	expect(page).to have_xpath("//canvas[@id='serachBar2']")
end
Then /I should see the searchButton2/ do
	expect(page).to have_xpath("//canvas[@id='searchButton2']")
end

Then /the word cloud title should be the same as html title/ do
	expect(current_url).to include("halfond")
end

Then /I should see the keyword as title/ do
	expect(page).to have_content("halfond")
end

#PaperList Page

Then /I should see the word as title/ do
	 expect(page).to have_content("the")
end

Then /I should see the paper list/ do
	expect(page).to have_xpath("//ol[@id='paperList']")
end

Then /the paper list title should be the same as html title/ do
	expect(current_url).to include("the/halfond")
end



# Abstract page
Then /I should see the paper title/ do
	expect(page).to have_content("I'm Walking")
end
Then /I should see the conference name/ do
	expect(page).to have_content("conference name")
end
Then /I should see the author list/ do
	expect(page).to have_content("authors list")
end
Then /the paper title should be the same as html title/ do
	expect(current_url).to include("http://localhost:3000/abstractpage/the/halfond/citation.cfm%3Fid%3D1186074%26CFID%3D929560790%26CFTOKEN%3D11722653")
end
Then /I should see the word hilighted/ do
	pending # I should see the word with yellow hilighted color
end


# buttons and navigate back and click button
When /I click (.*) button/ do |button|
	page.click_button(button)
end

Then /I should be on the (.*)/ do |backPage|
	expect(current_url).to eq(PAGES[backPage])
end
