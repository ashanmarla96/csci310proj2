#Then /I should see the paper title/ do
	#$expect(page).to have_content("Boyfriend")
#end

Then /I should see the correct conference name/ do 
	expect(page).to have_content("conference name")
end
Then /I should see the correct author list/ do 
	expect(page).to have_xpath("//ol[@id = 'authorlist']")
end

Then /I should see the paper contents/ do
	expect(page).to have_xpath("//div[@id = 'container4']")
end

Then /I should see the searched word/ do
	expect(page).to have_content("the")
end

When /I click an author/ do
	page.click_link("halfond")
end

When /I click the conference name/ do
	page.click_link("click conference name ")
end
